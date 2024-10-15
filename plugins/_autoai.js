import fetch from 'node-fetch';

export async function before(m) {
    if (m.isGroup) return 
    const chat = global.db.data.chats[m.chat];
    if (m.isBaileys || !m.text) return false;
    let text = m.text;
    try {
        if (chat.autoAi) {
            let res = await Deepenglish(text)
            await m.reply(res)
        }
    } catch (e) {
        throw e
    }
}

export const disabled = false;

async function Deepenglish(input) {
    const messages = [{
            role: "assistant",
            content: "Kamu adalah asisten AI yang siap membantu segala hal."
        },
        {
            role: "user",
            content: input
        }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages
            })
        });

        const result = await response.json();
        return result.answer;
    } catch (error) {
        console.error("An error occurred during data fetching:", error);
        throw error;
    }
}