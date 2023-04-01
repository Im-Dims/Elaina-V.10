import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/sc.mp3";
	conn.sendFile(m.chat, vn, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(.sc|.script)$/i;
handler.command = new RegExp();

export default handler;