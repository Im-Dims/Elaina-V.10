import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `text nya mana sayang?`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`file telah di simpan di ${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler