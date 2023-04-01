import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'zykomods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Dims_T\nNICKNAME:✧ Owner Elaina-MD\nORG: Dims\nTITLE:soft\nitem1.TEL;waid=6281398274790:6281398274790\nitem1.X-ABLabel:Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:More\nitem3.Email;type=Internet: DimsT@gmail.com\nitem3.X-ABLabel:Mail Owner DimsD\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:More\nitem4.X-ABLabel:Lokasi Saya\nBDAY;value=date:Private\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['✧ Sapa Owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'zykomods') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6281398274790:6281398274790\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kak.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.tags = ['info']
handler.command = /^(zykomods1|zykomods)$/i
export default handler