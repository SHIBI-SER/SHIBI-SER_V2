const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/XCM04h0.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `SHIBISER BOT CREATED BY SHIBISER 

π α΄α΄‘Ι΄α΄Κ Ι΄α΄α΄Κα΄Κ : wa.me/917594029466

π Ι’Ιͺα΄Κα΄Κ ΚΙͺΙ΄α΄ : https://github.com/SHIBI-SER/SHIBI-SER_V2

π Ι’Κα΄α΄α΄© ΚΙͺΙ΄α΄ : https://tinyurl.com/y9ldzfzo

π α΄α΄α΄Ιͺα΄ α΄α΄α΄α΄α΄Ι΄α΄κ± :https://tinyurl.com/yacnvlto

π κ±α΄Ιͺα΄α΄α΄Κ α΄α΄α΄α΄α΄Ι΄α΄κ±: https://tinyurl.com/y7tyqdzo

π α΄Κα΄Ι΄Ι΄α΄Κ ΚΙͺΙ΄α΄: https://t.ly/TGSb

π π΄π½πΉπΎπ ππ·π΄ ππ·πΈπ±πΈ ππ΄π π±πΎπ π

π κ±ΚΙͺΚΙͺκ±α΄Κ α΄Κα΄Ι΄α΄κ± κ°α΄Κ α΄κ±ΙͺΙ΄Ι’πππ₯°

πSHIBI BOTπ
`}) 

}));
