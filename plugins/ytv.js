import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} https://youtube.com/xxxxx`
    try {
const data = {
    title: "KLIK TOMBOL INI",
    sections: [{
            title: `DOWNLOADER YOUTUBE VIDEO`,
            rows: [{
                    title: "240p",
                    description: "BURIK NJIR😹",
                    id: `.ytv240p ${text}`
                },
                {
                    title: "360p",
                    description: "BURIK JUGA CUK😹",
                    id: `.ytv360p ${text}`
                },
                            {
                    title: "480p",
                    description: "HD KAGA BURIK JUGA KAGA",
                    id: `.ytv480p ${text}`
                },
                {
                    title: "720p",
                    description: "HD BJIR😹",
                    id: `.ytv720p ${text}`
                },
            ]
        }
    ]
}
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Klik Tombol dibawah ini untuk memilih kualitas Video"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "DOWNLOADER YOUTUBE VIDEO"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `Link ${text}`,
            subtitle: "DOWNLOADER",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(data)
              }],
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
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^(ytv|ytmp4|ytvideo)$/i
handler.limit = false
handler.register = true

export default handler
