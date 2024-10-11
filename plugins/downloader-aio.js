import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} <link sosmed>`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://api.ssateam.my.id/api/aio?query=${text}`)
  let gyh = await ouh.json() 
	let url = `${gyh.data.response.url}`
	conn.sendFile(m.chat, url, null, `hasil download dari link ${text}
	
	# *INFO AIO DOWNLOAD* #
	*TIPE* : *${gyh.data.response.type}*
	*HD* : *${gyh.data.response.hd}*
	*KUALITAS* : *${gyh.data.response.quality}*
	*HASIL* : *SUKSES DOWNLOAD*`, m)
}
handler.help = ['aio']
handler.tags = ['downloader']
handler.command = /^(aio|aiodownload|allsosmed|dlsosmedall)$/i
handler.premium = false
export default handler