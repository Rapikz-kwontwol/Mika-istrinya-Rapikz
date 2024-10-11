/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, command, text, args }) => {
if (!text) throw 'nomor/tag!'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : args[0] + '@s.whatsapp.net'
else who = m.sender
    let users = global.db.data.users
let jum = args[1] ? args[1] : 1000
    users[who].exp += jum * 1
    conn.reply(m.chat, 'sukses menambah limit sebanyak '+ jum, m)
}
handler.help = ['addexp']
handler.tags = ['owner']
handler.command = /^addexp(user)?$/i
handler.premium = true

export default handler