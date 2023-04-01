let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `Pa Pe Pa Pe Salam Sayangg @${m.sender.split`@`[0]}`
conn.reply(m.chat, cap, m, { quoted : fkontak }, { mentions: await conn.parseMention(cap) } )
}
handler.customPrefix = /^('pp|p|pee|pe|ppp')$/i
handler.command = new RegExp

export default handler