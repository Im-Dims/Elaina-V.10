import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/09962515cf81ce4119741.jpg'
let wm = 'Hai Saya Elaina-MD Jangan Lupa Suscribe Youtube Dims \n\nAtau bisa klik link Youtube : https://www.youtube.com/@DimsT1945'
let cap = `*S U B S C R I B E*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['OTW SUB',`ombaik`]],m)
}

handler.command = /^(zykomd)$/i
handler.premium = false
handler.limit = true

export default handler