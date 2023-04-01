import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/oyasumi.mp3";
	conn.sendFile(m.chat, vn, "oyasumi.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^('Oyasumi|Oyasuminasai')$/i;
handler.command = new RegExp();

export default handler;