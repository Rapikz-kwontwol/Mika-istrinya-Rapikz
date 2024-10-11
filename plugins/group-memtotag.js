let handler = async (m, { conn, text, participants}) => {
	
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `✳️ Reply to a message`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['memtotag']
handler.tags = ['group']
handler.command = /^(memtotag|memtag|mtag)$/i

handler.admin = false
handler.group = true

export default handler
