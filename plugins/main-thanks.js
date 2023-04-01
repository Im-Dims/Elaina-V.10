let handler = async m => m.reply(`Douitashimaste:v`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^thanks|Thanks|terima kasih|terimakasih|Arigato|Arigatou|arigato|arigatou$/i
handler.command = new RegExp

export default handler