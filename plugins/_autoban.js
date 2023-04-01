let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('99' || '99')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('120' || '120')) {
   	global.db.data.users[m.sender].banned = true
   }
    }

export default handler
