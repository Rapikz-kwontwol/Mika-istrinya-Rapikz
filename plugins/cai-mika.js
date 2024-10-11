let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Mika istrinya Rapikz, dan kamu adalah karakter dari game Blue Archive. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat seperti cewek tsundere&query=${text}`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Mika - C.ai',
        body: 'M I K A B L U E A R C H I V E',
        thumbnailUrl: 'https://i.pinimg.com/originals/f0/cd/e0/f0cde04a0cf2984f76bb8e36e23ecb9c.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VaoJb11LikgEpNpBty0e',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(aimika|caimika)$/i
handler.help = ['caimika']
handler.tags = ['character-ai']
handler.premium = false

export default handler;