/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin}) {
if (m.isGroup) return 
if (m.fromMe && m.isBaileys) return !0

  let chat = global.db.data.chats[m.chat];
  
 if (m.id.includes('BAE5')) return !0
  if (chat.antiBot) { 
  await conn.reply(m.chat, "*[ BOT LAIN TERDETEKSI ]*", null);
await conn.delay(1000)
if (!isAdmin && !isBotAdmin) {
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");  
}
}
}

export default handler