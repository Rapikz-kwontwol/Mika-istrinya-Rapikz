import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Searchnya Mana?`
m.reply(wait)
try {
let anu = await fetch(`https://ssa-api.vercel.app/api/tiktoksearch?query=${text}`)
let result = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Description:* ${result.data.result.title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: `${result.data.result.media.nowm}` } }, { upload: conn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Next Searching : ${text}\",\"id\":\".ttsearch ${text}\"}`
              },
            ],
          })
       })
    }
  }
}, { quoted: m })

return await conn.relayMessage(m.chat, msgs.message, {})
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.help = ['ttsearch']
handler.tags = ['downloader']
handler.command = /^(ttsearch|ttplay)$/i
handler.limit = true

export default handler