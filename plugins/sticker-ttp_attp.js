import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙨𝙚 𝙘𝙤𝙣𝙫𝙞𝙚𝙧𝙩𝙖 𝙚𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command}* Nuevo Sticker`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: imagen1, sourceUrl: redes.getRandom()}}})
let teks = encodeURI(text)
conn.fakeReply(m.chat, `${espera}\n\n> *Esto puede demorar unos minutos*`, '0@s.whatsapp.net', `Nagi-Bot`, 'status@broadcast', null, fake)
//m.reply(`${espera}\n\n> *Esto puede demorar unos minutos*`) 

if (command == 'attp') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/attp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: channel, thumbnail: imagen1}}}, { quoted: m })}

if (command == 'ttp') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/ttp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: channel, thumbnail: imagen1}}}, { quoted: m })}
}
handler.help = ['attp'];
handler.tags = ['sticker']
handler.command = /^(attp|ttp|ttp2|ttp3|ttp4|attp2)$/i
handler.estrellas = 3;
handler.register = true
export default handler