import fs from 'fs';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    await m.reply("Tunggu sebentar...");

    fs.readdir("./sessions", async function (err, files) {
        if (err) {
            console.log('Tidak dapat memindai direktori: ' + err);
            return m.reply('Tidak dapat memindai direktori: ' + err);
        }

        let filteredArray = files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
        );

        console.log(filteredArray.length);

        let teks = `🚩 Terdeteksi ${filteredArray.length} file sampah\n\n`;

        if (filteredArray.length === 0) {
            return m.reply(teks);
        }

        filteredArray.forEach(function (file, i) {
            teks += (i + 1) + `. ${file}\n`;
        });

        m.reply(teks);
        m.reply("Menghapus file sampah...");

        filteredArray.forEach(function (file) {
            fs.unlinkSync(`./sessions/${file}`);
        });

        m.reply("🚩 Berhasil menghapus semua sampah di folder session");
    });
}

handler.help = ["delsesi"];
handler.tags = ["tools"];
handler.command = /^(delsesi|delsession|clearsesi)$/i;
handler.limit = true;

export default handler;