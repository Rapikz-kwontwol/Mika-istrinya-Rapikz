import { generateWAMessageContent } from "@adiwajshing/baileys";

const handler = async (m, { conn, usedPrefix, command }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg)?.mimetype || "";
  
  if (!/webp|image|video|gif|viewOnce/g.test(mime)) {
    return m.reply(`Reply Media dengan perintah\n\n${usedPrefix} ${command}`);
  }
  
  const media = await q.download();
  
  const msg = await generateWAMessageContent(
    {
      video: media,
    },
    {
      upload: conn.waUploadToServer,
    },
  );
  
  await conn.relayMessage(
    m.chat,
    {
      ptvMessage: msg.videoMessage,
    },
    {
      quoted: m,
    },
  );
};

handler.help = ["toptv (reply)"];
handler.tags = ["tools"];
handler.command = /^(toptv)/i;

export default handler;