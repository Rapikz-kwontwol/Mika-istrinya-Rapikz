import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return m.reply(`• *Example :* ${usedPrefix}${command} *[url X / Twitter]*`);
    
    m.reply(wait);
    
    try {
        let res = await fetch(`https://api.ryzendesu.vip/api/downloader/twitter?url=${text}`);
        let json = await res.json();
        
        if (json.status && json.type === 'video') {
            let videoUrl = json.media[0].url;
            await conn.sendFile(m.chat, videoUrl, '', '[ X / TWITTER DOWNLOADER ]', m);
        } else {
            m.reply('Failed to download video. Please check the URL or try again later.');
        }
    } catch (err) {
        console.error(err);
        m.reply('An error occurred while fetching the video.');
    }
};

handler.help = ["twitter", "x"].map((a) => a + " [url]");
handler.tags = ["downloader"];
handler.command = ["twitter", "x"];
export default handler;
