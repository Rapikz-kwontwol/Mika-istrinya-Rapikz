import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
try {
let anu = await fetch(`https://widipe.com/download/ttdl?url=${text}`)
let result = await anu.json()
await conn.sendFile(m.chat, result.result.video, 'anu.mp4', `*Description:* ${result.result.title}`, m)
await conn.sendMessage(m.chat, {
      audio: { url: result.result.audio },
      mimetype: 'audio/mpeg'
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler