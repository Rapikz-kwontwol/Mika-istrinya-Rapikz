import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} <link yt>`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://api.ssateam.my.id/api/aio?query=${text}`)
  let gyh = await ouh.json() 
	let url = `${gyh.data.response.url}`
	conn.sendFile(m.chat, url, null, `NIH KAK VIDEONYA`, m)
}
handler.help = handler.command = ['ytshorts', 'shorts', 'short', 'ytmp4', 'ytv'];
handler.tags = ['downloader'];
handler.limit = true;
handler.premium = false;

export default handler;
