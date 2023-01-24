let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

export async function before(m, { isAdmin, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiver || chat.isBanned) return
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n\n*𝑯𝒆𝒚 𝒂𝒒𝒖𝒊́ 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒐𝒄𝒖𝒍𝒕𝒂𝒓 𝒏𝒂𝒅𝒂 𝒓𝒂𝒕𝒂 😎!!*`, m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n\n*𝑯𝒆𝒚 𝒂𝒒𝒖𝒊́ 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒐𝒄𝒖𝒍𝒕𝒂𝒓 𝒏𝒂𝒅𝒂 𝒓𝒂𝒕𝒂 😎!!*`, m)
}}}
