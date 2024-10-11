import axios from 'axios';
import FormData from 'form-data';
import cheerio from 'cheerio';

const pin = async(link) => {
    const form = new FormData();
    form.append("url", link);
    const result = {
        status: 200,
        creator: "David XD",
        data: {
            url: link,
            result: ""
        }
    };
    try {
        const { data } = await axios({
            url: "https://pinterestvideodownloader.com/download.php",
            method: "POST",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": "_ga_966QNV4G77=GS1.1.1718265709.1.1.1718265710.0.0.0; _ga=GA1.2.431955486.1718265710; _gid=GA1.2.1691914427.1718265710; __gads=ID=a768755ea54ad065:T=1718265744:RT=1718265744:S=ALNI_MYhy1D7j7Sk-L38lY0gCrvHslkj9w; __gpi=UID=00000e4a44effcb5:T=1718265744:RT=1718265744:S=ALNI_MYlyVI3dB_rxdfiktijz5hqjdFh3A; __eoi=ID=bcaa659e3f755205:T=1718265744:RT=1718265744:S=AA-AfjaNqVe1HORKDn3EorxJl5TE; FCNEC=%5B%5B%22AKsRol-DFkw9G-FS4szSzz5S-Zy-awxxF02UE3axThxkDqbMdR-KD0ss2AkukIaNNXn-fXts6XPmkNEPhKLEh-MWatFyvpof-XZuWVyQDQIAatU_iGwEIPl3TYlsnsZdyNvsNGsr0w0yz2xNc-o7rSwnGm5sWti7ag%3D%3D%22%5D%5D",
                "Origin": "https://pinterestvideodownloader.com",
                "Referer": "https://pinterestvideodownloader.com/id/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
            },
            data: form
        });

        const $ = cheerio.load(data);
        let _$ = $("div.wrapper.clearfix > div#main.maxwidth.clearfix > main#content.content > center").eq(0);
        result.data.result = _$.find("div.col-sm-12 > video").attr("src");
    } catch (error) {
        result.status = 500;
        result.data.result = `Error: ${error.message}`;
    }
    return result;
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `Usage: ${usedPrefix + command} <Pinterest URL>\nNOTE: ONLY VIDEO!!!`, m);
    }
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let link = args[0];
    let response = await pin(link);

    if (response.status === 200 && response.data.result) {
        conn.sendFile(m.chat,`${response.data.result}`, null, `NIH VIDEONYA\nLINK VIDPLAY: ${response.data.result}`, m);
    } else {
        conn.reply(m.chat, `Failed to fetch video. ${response.data.result}`, m);
    }
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})    
};

handler.command = handler.help = ["pindl"];
export default handler;