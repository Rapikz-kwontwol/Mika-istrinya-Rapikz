import fetch from 'node-fetch';
let handler = async (m, { conn, command, text }) => {

    if (!text) throw `Textnya mana? Contoh:\n.${command} Apa arti ai?`;	
  let apii = await fetch(`https://widipe.com/gemini?text=${text}`)
  let res = await apii.json()
  conn.reply(m.chat, `
 [ *GOOGLE GEMINI/BARD* ]
 
${res.result}
`.trim(), m)
}
handler.command = /^(gemini|bard)$/i
handler.help = ['gemini','bard']
handler.tags = ['ai']
handler.premium = false

export default handler;