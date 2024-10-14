import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} https://x.com/scvrecrowx/status/1820036885831409716`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://api.ssateam.my.id/api/twitter?url=${text}`)
  let gyh = await ouh.json() 
	let url = `${gyh.data.response.video_hd}`
	conn.sendFile(m.chat, url, null, `*T I T L E :*\n${gyh.data.response.desc}`, m)
}
handler.help = ['twitter','xdl']
handler.tags = ['downloader']
handler.command = /^(twitter|xdl)$/i
handler.premium = false
export default handler