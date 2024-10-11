let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw 'Tag orang yang akan dijadikan sebagai Owner!'
    if (global.owner.includes(who.split('@')[0])) throw 'Orang ini sudah menjadi owner!'
    global.owner.push([who.split('@')[0], m.name, true])
    const caption = `Sekarang @${who.split('@')[0]} telah dijadikan sebagai Owner!`
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['addowner @user']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i
handler.owner = true

export default handler