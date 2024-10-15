let handler = async (m, {
    conn,
    text,
    isAdmin,
    isBotAdmin
}) => {

    let msgs = global.db.data.msgs
    if (!text) throw 'ketik pesannya'
    try {
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    await _m.copyNForward(m.chat, false)
    } catch (e){
    throw 'tidak dapat menemukan pesan'
    }
}
handler.help = handler.command = ['getmsg']
handler.tags = ['main']
export default handler