const Discord = require("discord.js");
const client = new Discord.Client()
const antispam = require("discord-anti-spam");



client.on('ready', () => {


	antispam(client, {

		warnBuffer: 3,

		maxBuffer: 5,

		interval: 1000,

		warningMessage: "PERINGATAN SPAM ! MOHON UNTUK TIDAK MELAKUKAN SPAM ! SANKSI BANNED PERMANENT @here",

		maxDuplicatesWarning: 5,

		maxDuplicatesBan: 6,

		deleteMessageAfterBanForPastDay: 7,

		exemptRoles: ["✪✪👑 Member Devisi Free Firee 👑✪✪", "✪✪✪✪  ️Boys Tampan ✪✪✪✪", "✪✪✪✪✪✪ Princess ✪✪✪✪✪✪", ""],

		exemptUser: [],

});


});



client.on('message', msg => {


  client.emit('checkMessage', msg);

}) ///GANTI TOKEN NYA SAMA BOT TOKEN KAMU 
client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D15Lsw.Z4p-Qk-f-WxlhiHQmOSWhDs2YtM");