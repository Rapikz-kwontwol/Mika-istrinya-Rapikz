/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

export async function before(m, { isAdmin, isBotAdmin, conn}) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
           // m.reply(`*Terdeteksi File Webp*\nSory Sticker yang kamu kirim akan di hapus, karna admin mengaktifkan antiSticker`)
await conn.delay(10000)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}