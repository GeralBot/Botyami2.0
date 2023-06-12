let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ` @𝐲𝐚𝐦𝐢𝐟𝐫𝐞𝐞𝟐𝟑 : ${pesan}`
let teks = `⺀𝑹𝒆𝒗𝒊𝒗𝒂𝒏 𝒑𝒍𝒂𝒏𝒕𝒂𝒔 - 𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒗𝒆𝒓𝒔𝒖𝒔 🦊⺀\n\n❏ ${oi}\n\n❏  𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 :\n`
for (let mem of participants) {
teks +=`🐢 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐘𝐚𝐦𝐢 𝐁𝐨𝐭 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    