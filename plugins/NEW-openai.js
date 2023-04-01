// BY Dims
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Mau Nyari Apa Sayang??`
await m.reply('Chotto Matte...')
let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai', 'elaina']
handler.tags = ['fun']
handler.command = /^(ai|openai|elaina)$/i
export default handler