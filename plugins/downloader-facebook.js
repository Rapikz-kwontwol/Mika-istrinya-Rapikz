import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} https://www.facebook.com/100077779900033/videos/1526198498276164/?mibextid=rS40aB7S9Ucbxw6v`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://widipe.com/download/fbdl?url=${text}`)
  let gyh = await ouh.json() 
	let url = `${gyh.result.HD}`
	conn.sendFile(m.chat, url, null, `nih videonya kak`, m)
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(fb|facebook|fbdl|facebookdl)$/i
handler.premium = false
export default handler