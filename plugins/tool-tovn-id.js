let handler = async (m, { conn, usedPrefix, command, text }) => {
    // Mengecek apakah `text` kosong
    if (!m.quoted) {
        return m.reply(`[❗] Reply audio dengan command /${usedPrefix + command} <id>`);
    }
    try {
        m.react('⏱️');
        m.react('✅');
        let tujuan = text;
        conn.sendMessage(`${text}`,{audio: await m.quoted.download(), mimetype: 'audio/mp4', ptt: true})
        m.reply(`D o n e ✔️\n> Audio Berhasil Dikirm Ke \`\`\`${tujuan}\`\`\``);
    } catch (err) {
        m.reply('Error: ' + err.message);
        m.react('❌');
    }
};

handler.help = ['tovn-id'];
handler.command = /^(tovn-id)$/i;
handler.tags = ['tools'];

export default handler;