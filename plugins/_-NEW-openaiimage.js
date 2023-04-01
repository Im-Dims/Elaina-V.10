// • By Dims

import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Anime isekai`
await m.reply('Sedang Mencari...')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=AryaXyz&text=${text}`
  
  conn.sendHydrated2(m.chat, 'Ini Kak', wm3, res,  'https://chat.whatsapp.com/J6SNWsENprgGPtMaMzUH3P', 'Grub elaina', 'https://youtube.com/@DimsT1945', 'Youtube', [['Owner', `.owner`],
  ['Menu', `.menu`]], m)
  
}
handler.help = ['elainaimage', 'aidraw']
handler.tags = ['fun']
handler.command = /^(elainaimage|aidraw)$/i
handler.limit = false

export default handler