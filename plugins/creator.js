const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = 'Dhani'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'
  let onW = await this.isOnWhatsApp(njid) || { isBusiness: false }


  m.reply(`Nomer owner itu *bukan bot*, tapi nomor _*pemilik bot*_\n\nSilahan chat jika ada keperluan.\nChat "P" atau minta save kemungkinan tidak akan di balas, dan -9999 social credit.`)
  this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${onW.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid].vname || this.getName(njid)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
