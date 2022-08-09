const fs = require('fs')
const chalk = require('chalk')

//Config
global.owner = ['6282331660134']
global.premium = ['6282331660134']
global.ownername = 'SkylarKaf'
global.botname = 'elaina-md'
global.packname = 'elaina-md'
global.author = '@skylarkaf_'
global.sessionName = 'xyz'

//Url?
global.websitex = 'https://www.instagram.com/skylarkaf_/'

//Mess
global.mess = {
    success: 'Berhasil',
    ban: 'Kamu Telah Di Ban!',
    Onlyadmin: 'Fitur Khusus Admin Group!',
    OnlybotAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    Onlyowner: 'Fitur Khusus Owner Bot',
    Onlygroup: 'Fitur Digunakan Hanya Untuk Group!',
    Onlyprivate: 'Fitur Digunakan Hanya Untuk Private Chat!',
    Onlybot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    error: 'Terjadi kesalahan',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
