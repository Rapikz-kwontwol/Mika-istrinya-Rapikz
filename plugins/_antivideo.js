export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isVideo = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiVideo && isVideo) {
    if(isVideo === "videoMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
           m.reply(`*Terdeteksi File mp4*\nSory video/mp4 yang kamu kirim akan di hapus, karna admin mengaktifkan antiVideo`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
} 