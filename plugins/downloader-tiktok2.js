import cheerio from 'cheerio'
import axios from 'axios'

let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix
}) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
try {
    const {
        isSlide,
        result,
        title,
        author
    } = await tiktok(text);
    let no = 1

    if (isSlide == true) {
        await m.reply('Download tiktok slide\nFoto dikirim ke chat pribadi')
        let cap = `乂 *TIK TOK SLIDE*\n\n`
        let no = 1
        for (let img of result) {
         await conn.sendFile(m.sender, img, '', `${cap}*[${no++}]*`, null)
            await conn.delay(2000)
        }
    } else if (isSlide == false) {
        await m.reply('Downloading tiktok video')
        let vd = `*${title}*

- Author: ${author}`
        await conn.sendFile(m.chat, result || emror, '', vd, m)

    }
} catch (e) {
throw eror
}
}

handler.help = ['tiktok2 <url>']
handler.tags = ['downloader']
handler.command = /^(tt2|tiktok2)$/i

handler.register = true
handler.limit = true

export default handler

async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            isSlide: video ? false : true,
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}