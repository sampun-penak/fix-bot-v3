import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}

┌─「 Donasi • Pulsa 」
│ • *XL AXIATA:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *MotionPay:* [${global.plinkaja}]
❏────`
let wibu = `https://telegra.ph/file/74d983dd46e8bac065b48.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/sampun_penak",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/CgLsm8GNyUu/?igshid=YmMyMTA2M2Y=", 
    title: 'TheBotz-Official X Mimim Official',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
