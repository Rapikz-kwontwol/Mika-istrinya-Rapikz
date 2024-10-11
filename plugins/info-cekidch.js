let handler = async (m, { conn }) => {
  try {
    let anu = m.quoted.newsletterJid
    m.reply(anu);
  } catch (error) {
    console.error(error);
    m.reply('GAGAL MENDAPATKAN ID\n> Mungkin kamu blom reply undangan admin saluran atau salah reply');
  }
};
handler.help = ['cekidch']
handler.tags = ['info']
handler.command = /^(cekidch)$/i

export default handler