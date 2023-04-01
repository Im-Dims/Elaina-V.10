import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=AryaXyz&img=${out}` }, caption: `*Mama Aku Animee :v*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`Error 404. Pastikan Gambar Terlihat Jelas`)
		}
	} else {
		m.reply(`Kirim Gambar/Reply Dengan Caption .jadianime`)
	}
}

handler.menuanime = ['jadianime']
handler.tagsanime = ['search']
handler.command = /^((to|jadi)a?nime)$/i

handler.limit = true

export default handler