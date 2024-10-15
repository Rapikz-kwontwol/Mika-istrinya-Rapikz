const { getAggregateVotesInPollMessage, generateWAMessage, areJidsSameUser, proto } = (await import('@adiwajshing/baileys')).default

export async function before(m, {conn}) {

//vconn.ev.on('message.delete', conn.onDelete)
 async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Nightmare"
        }
    }
    async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
    }
   conn.ev.on('message.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdate && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix + toCmd
	                await appenTextMessage(prefCmd, chatUpdate)
	                await conn.delay(1000)
	                conn.sendMessage(key.remoteJid, { delete: key })
				}
			}
		}
    })
}