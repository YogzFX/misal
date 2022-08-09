const fs = require("fs");
const chalk = require('chalk');

exports.allmenuTxT = (prefix) => {
return `*_#Searching_*
 ° ${prefix}play [query]
 ° ${prefix}yts [query]
 ° ${prefix}google [query]
 ° ${prefix}pinterest [query]
 ° ${prefix}wallpaper [query]
 
*_#Group_*
 ° ${prefix}linkgroup
 ° ${prefix}ephemeral [option]
 ° ${prefix}setppgc [image]
 ° ${prefix}setname [text]
 ° ${prefix}setdesc [text]
 ° ${prefix}group [option]
 ° ${prefix}editinfo [option]
 ° ${prefix}add @user
 ° ${prefix}kick @user
 ° ${prefix}hidetag [text]
 ° ${prefix}tagall [text]
 ° ${prefix}antilink [on/off]
 ° ${prefix}mute [on/off]
 ° ${prefix}promote @user
 ° ${prefix}demote @user
 
*_#Downloader_*
 ° ${prefix}tiktok [url]
 ° ${prefix}tiktokmp3 [url]
 ° ${prefix}instagram [url]
 ° ${prefix}ytmp3 [url]
 ° ${prefix}ytmp4 [url]
 ° ${prefix}mediafire [url]

*_#Converter_*
 ° ${prefix}toimage
 ° ${prefix}removebg
 ° ${prefix}sticker
 ° ${prefix}smeme
 ° ${prefix}attp
 ° ${prefix}emojimix
 ° ${prefix}emojis
 ° ${prefix}emojis
 ° ${prefix}tovideo
 ° ${prefix}tourl
 ° ${prefix}bass
 ° ${prefix}blown
 ° ${prefix}deep
 ° ${prefix}earrape
 ° ${prefix}fast
 ° ${prefix}fat
 ° ${prefix}nightcore
 ° ${prefix}reverse
 ° ${prefix}robot
 ° ${prefix}slow
 ° ${prefix}tupai
 
*_#AniManga_*
 ° ${prefix}quotesanime
 ° ${prefix}ppcp
 ° ${prefix}randomwaifu
 ° ${prefix}randomloli
 
*_#Textpro_*
 ° ${prefix}3dbox   
 ° ${prefix}drapwater   
 ° ${prefix}lion2   
 ° ${prefix}papercut   
 ° ${prefix}transformer   
 ° ${prefix}herryp   
 ° ${prefix}neondevil   
 ° ${prefix}3dstone   
 ° ${prefix}3davengers   
 ° ${prefix}thunder   
 ° ${prefix}graffiti   
 ° ${prefix}pornhub   
 ° ${prefix}glitch   
 ° ${prefix}glitch3   
 ° ${prefix}glitch2   
 ° ${prefix}3dspace   
 ° ${prefix}lion   
 ° ${prefix}3dneon   
 ° ${prefix}neon   
 ° ${prefix}greenneon   
 ° ${prefix}bokeh   
 ° ${prefix}hollographic   
 ° ${prefix}bear   
 ° ${prefix}wolf   
 ° ${prefix}joker   
 ° ${prefix}dropwater   
 ° ${prefix}neonlight   
 ° ${prefix}thewall   
 ° ${prefix}natural   
 ° ${prefix}carbon   
 ° ${prefix}pencil   
 ° ${prefix}blackpink  
 ° ${prefix}neon  
 ° ${prefix}greenneon  
 ° ${prefix}advanceglow  
 ° ${prefix}futureneon  
 ° ${prefix}sandwriting  
 ° ${prefix}sandsummer  
 ° ${prefix}sandengraved  
 ° ${prefix}metaldark  
 ° ${prefix}neonlight  
 ° ${prefix}holographic  
 ° ${prefix}text1917  
 ° ${prefix}minion  
 ° ${prefix}deluxesilver  
 ° ${prefix}newyearcard  
 ° ${prefix}bloodfrosted  
 ° ${prefix}halloween  
 ° ${prefix}jokerlogo  
 ° ${prefix}fireworksparkle  
 ° ${prefix}natureleaves  
 ° ${prefix}bokeh  
 ° ${prefix}toxic  
 ° ${prefix}strawberry  
 ° ${prefix}box3d  
 ° ${prefix}roadwarning  
 ° ${prefix}icecold  
 ° ${prefix}luxury  
 ° ${prefix}cloud  
 ° ${prefix}summersand  
 ° ${prefix}horrorblood  
 ° ${prefix}thunder
 
*_#FunGames_*
 ° ${prefix}afk
 ° ${prefix}suit
 ° ${prefix}asahotak
 ° ${prefix}susunkata
 ° ${prefix}tebakkalimat
 ° ${prefix}tekateki
 ° ${prefix}caklontong
 ° ${prefix}tebakanime
 ° ${prefix}tebakbendera
 ° ${prefix}tebaklagu
 ° ${prefix}tebaklirik

*_#Anonymous Chat_*
 ° ${prefix}anonymous
 ° ${prefix}start
 ° ${prefix}next
 ° ${prefix}keluar
 ° ${prefix}sendkontak

*_#OwnerMenu_*
 ° ${prefix}react [emoji]
 ° ${prefix}chat [option]
 ° ${prefix}join [link]
 ° ${prefix}leave
 ° ${prefix}block @user
 ° ${prefix}unblock @user
 ° ${prefix}bcgroup [text]
 ° ${prefix}bcall [text]
 ° ${prefix}setppbot [image]
 ° ${prefix}setexif
 
*_#OtherMenu_*`
}

exports.searchTxT = (prefix) => {
return `*_#Searching_*
 ° ${prefix}play [query]
 ° ${prefix}yts [query]
 ° ${prefix}google [query]
 ° ${prefix}pinterest [query]
 ° ${prefix}wallpaper [query]`
}

exports.groubTxT = (prefix) => {
return `*_#Group_*
 ° ${prefix}linkgroup
 ° ${prefix}ephemeral [option]
 ° ${prefix}setppgc [image]
 ° ${prefix}setname [text]
 ° ${prefix}setdesc [text]
 ° ${prefix}group [option]
 ° ${prefix}editinfo [option]
 ° ${prefix}add @user
 ° ${prefix}kick @user
 ° ${prefix}hidetag [text]
 ° ${prefix}tagall [text]
 ° ${prefix}antilink [on/off]
 ° ${prefix}mute [on/off]
 ° ${prefix}promote @user
 ° ${prefix}demote @user`
}

exports.downloaderTxT = (prefix) => {
return `*_#Downloader_*
 ° ${prefix}tiktok [url]
 ° ${prefix}tiktokmp3 [url]
 ° ${prefix}instagram [url]
 ° ${prefix}ytmp3 [url]
 ° ${prefix}ytmp4 [url]
 ° ${prefix}mediafire [url]`
}

exports.converterTxT = (prefix) => {
return `*_#Converter_*
 ° ${prefix}toimage
 ° ${prefix}removebg
 ° ${prefix}sticker
 ° ${prefix}smeme
 ° ${prefix}attp
 ° ${prefix}emojimix
 ° ${prefix}emojis
 ° ${prefix}emojis
 ° ${prefix}tovideo
 ° ${prefix}tourl
 ° ${prefix}bass
 ° ${prefix}blown
 ° ${prefix}deep
 ° ${prefix}earrape
 ° ${prefix}fast
 ° ${prefix}fat
 ° ${prefix}nightcore
 ° ${prefix}reverse
 ° ${prefix}robot
 ° ${prefix}slow
 ° ${prefix}tupai`
}

exports.animangaTxT = (prefix) => {
return `*_#AniManga_*
 ° ${prefix}quotesanime
 ° ${prefix}ppcp
 ° ${prefix}randomwaifu
 ° ${prefix}randomloli`
}

exports.textproTxT = (prefix) => {
return `*_#Textpro_*
 ° ${prefix}3dbox   
 ° ${prefix}drapwater   
 ° ${prefix}lion2   
 ° ${prefix}papercut   
 ° ${prefix}transformer   
 ° ${prefix}herryp   
 ° ${prefix}neondevil   
 ° ${prefix}3dstone   
 ° ${prefix}3davengers   
 ° ${prefix}thunder   
 ° ${prefix}window   
 ° ${prefix}graffiti   
 ° ${prefix}pornhub   
 ° ${prefix}glitch   
 ° ${prefix}glitch3   
 ° ${prefix}glitch2   
 ° ${prefix}3dspace   
 ° ${prefix}lion   
 ° ${prefix}3dneon   
 ° ${prefix}neon   
 ° ${prefix}greenneon   
 ° ${prefix}bokeh   
 ° ${prefix}hollographic   
 ° ${prefix}bear   
 ° ${prefix}wolf   
 ° ${prefix}joker   
 ° ${prefix}dropwater   
 ° ${prefix}neonlight   
 ° ${prefix}thewall   
 ° ${prefix}natural   
 ° ${prefix}carbon   
 ° ${prefix}pencil   
 ° ${prefix}blackpink  
 ° ${prefix}neon  
 ° ${prefix}greenneon  
 ° ${prefix}advanceglow  
 ° ${prefix}futureneon  
 ° ${prefix}sandwriting  
 ° ${prefix}sandsummer  
 ° ${prefix}sandengraved  
 ° ${prefix}metaldark  
 ° ${prefix}neonlight  
 ° ${prefix}holographic  
 ° ${prefix}text1917  
 ° ${prefix}minion  
 ° ${prefix}deluxesilver  
 ° ${prefix}newyearcard  
 ° ${prefix}bloodfrosted  
 ° ${prefix}halloween  
 ° ${prefix}jokerlogo  
 ° ${prefix}fireworksparkle  
 ° ${prefix}natureleaves  
 ° ${prefix}bokeh  
 ° ${prefix}toxic  
 ° ${prefix}strawberry  
 ° ${prefix}box3d  
 ° ${prefix}roadwarning  
 ° ${prefix}icecold  
 ° ${prefix}luxury  
 ° ${prefix}cloud  
 ° ${prefix}summersand  
 ° ${prefix}horrorblood  
 ° ${prefix}thunder`
}

exports.fungamesTxT = (prefix) => {
return `*_#FunGames_*
 ° ${prefix}afk
 ° ${prefix}suit
 ° ${prefix}asahotak
 ° ${prefix}susunkata
 ° ${prefix}tebakkalimat
 ° ${prefix}tekateki
 ° ${prefix}caklontong
 ° ${prefix}tebakanime
 ° ${prefix}tebakbendera
 ° ${prefix}tebaklagu
 ° ${prefix}tebaklirik`
}

exports.anonymousTxT = (prefix) => {
return `*_#Anonymous Chat_*
 ° ${prefix}anonymous
 ° ${prefix}start
 ° ${prefix}next
 ° ${prefix}keluar
 ° ${prefix}sendkontak`
}

exports.ownermenuTxT = (prefix) => {
return `*_#OwnerMenu_*
 ° ${prefix}react [emoji]
 ° ${prefix}chat [option]
 ° ${prefix}join [link]
 ° ${prefix}leave
 ° ${prefix}block @user
 ° ${prefix}unblock @user
 ° ${prefix}bcgroup [text]
 ° ${prefix}bcall [text]
 ° ${prefix}setppbot [image]
 ° ${prefix}setexif`
}

exports.othermenuTxT = (prefix) => {
return `*_#OtherMenu_*`
}