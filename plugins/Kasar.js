let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `Jangan Berkata Kasar Dong Kak @${m.sender.split`@`[0]}`
conn.reply(m.chat, cap, m, { quoted : fkontak }, { mentions: await conn.parseMention(cap) } )
}
handler.customPrefix = /^(Babi|babi|anjg|ajg|Anjg|Ajg|Kontl|kontl|kontl|Kontl|Asu|Ajg|Memek|Memk|Mmk|memek|mmk|memk|Bangsat|bangsat|bgst|Bngst)$/i
handler.command = new RegExp

export default handler