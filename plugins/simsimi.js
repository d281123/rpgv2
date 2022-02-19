let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan text biar bisa chat sama simsimi!\n\nContoh:\n${usedPrefix + command} hai`
  let res = await fetch('https://api.simsimi.net/v2/?text=${teks}&lc=id'))
  if (!res.ok) throw eror
  let json = await methods.GET()
  if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach')
  await m.reply(`*Simi:* ${json.result}`)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

