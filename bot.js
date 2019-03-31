
const Discord = require("discord.js") 
const settings = require("./your_settings.json");
const bot = new Discord.Client()
const prefix = "/";
const client = new Discord.Client()
const antispam = require("./antispam.js");
const {Attachment} = require("discord.js");


///const clear = require("./clear.js");
const emb = require("./embed.js");
const index = require("./index.js");
const spam = require("./spam.js");

const level = require("./level.js");
const rpg = require("./rpg.js");
const quotes = require("./quotes.js");

bot.on('ready', async => {
console.log("Bot Melucur!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Bot Berhasil Tapi tetap Periksa Aplikasi Termux jika bot mati dan hidupkan ulang!")

bot.user.setActivity("Bot Loading....", {type: "LISTENING"});

let activNum = 0;
setInterval(function() {
	if (activNum === 0) {
		bot.user.setActivity("Makasih Banyak", {type: "LISTENING"});
		activNum = 1;
	 }else if(activNum === 1) {
		bot.user.setActivity("Buat Semunya Rara",{type: "STREAMING"});
		activNum = 0;
		
		}
}, 5000);



});

bot.on('message', message => {
	if (message.content === "/avatar") {
		message.channel.send(message.author.avatarURL)
	}
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === '❀•۰►🕊ᴡᴇʟᴄᴏᴍᴇ');
	if (!channel) return;
	channel.send('SELAMAT DATANG DAN SEMOGA BETAH, ${member}'); 
	
	});

client.on('message', message => { 
if (message.content.includes('changeNick')) { 
client.setNickname({nick: message.content.replace('changeNick ', '')}); 

} 

});
  

///ini untuk pesan auto respon,bisa juga di ubah di bagian 'ping' sama "pong" atau bisa juga di tambah dengan cara di copas 
bot.on('message', message => {
	if (message.content === 'ping') {
	message.reply("pong");
	}
});




bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }
});

bot.on('message', msg => { 

if (msg.content === prefix + "invite")
 { msg.channel.type === (`"dm"`) + msg.author.sendMessage(`"https://discord.gg/P4pdgTu"`) 
 
 } 
 
 });

bot.on("message", message => {
	if (message.content === "Pagi") {
		message.reply("¸. • * ´✶´ ♡ ¸. • * ´´ ♡ 🌼🍃🌼🍃 * * _🌈 ○ 💙_ Selamat pagi❤🌹 * * 💚. • ´¸. • * ´✶´ ♡ ¸. • * ´´ ♡ ⛅ * * ° ☆ ° ˛ * ˛ ☆ _Π ____ *。 * ˚ ☆ * * ˚ ˛ ★ ˛ • ˚ * / ______ / ~ ＼。˚ ˚ ˛ * * ˚ ˛ • ˛ • ˚ ｜ 田田 ｜ 門 ｜ ˚ * * 🌴╬═🌴╬╬🌴╬╬🌴═╬╬═🌴 *\by Ansel")
	}
});
bot.on("message", message => {
	if (message.content === "/rara") {
		message.reply("───▄▄▄▄▄▄─────▄▄▄▄▄▄ ─▄█▓▓▓▓▓▓█▄─▄█▓▓▓▓▓▓█▄ ▐█▓▓▒▒▒▒▒▓▓█▓▓▒▒▒▒▒▓▓█▌ █▓▓▒▒░╔╗╔═╦═╦═╦═╗░▒▒▓▓█ █▓▓▒▒░║╠╣╬╠╗║╔╣╩╣░▒▒▓▓█ ▐█▓▓▒▒╚═╩═╝╚═╝╚═╝▒▒▓▓█▌ ─▀█▓▓▒▒░░░░░░░░░▒▒▓▓█▀ ───▀█▓▓▒▒░░░░░▒▒▓▓█▀ ─────▀█▓▓▒▒░▒▒▓▓█▀ ──────▀█▓▓▒▓▓█▀ ────────▀█▓█▀ ──────────▀\nBy Ansel")
	}
});
bot.on("message", message => {
	if (message.content === "/jujun") {
		message.reply("MuuaaacHH\nByJujun")
	}
});
bot.on("message", message => {
	if (message.content === "/r") {
		const attachment = new Attachment ("https://i.ibb.co/8sGmL27/1553357735969.png");
		message.channel.send(attachment);
	}
});

bot.on("message", message => {
	if (message.content === "/ra") {
		const attachment = new Attachment ("https://i.ibb.co/kJ5K4WT/C-R-r.jpg");
		message.channel.send(attachment);
	}
});
bot.on("message", message => {
	if (message.content === "/jun") {
		const attachment = new Attachment ("https://i.ibb.co/nbWnt5Q/IMG-20190323-WA0027.jpg");
		message.channel.send(attachment);
	}
});

bot.on("message", message => {
	if (message.content === "/siapaaku") {
		const embed = new Discord.RichEmbed()
		
		.setTitle("Kartu Nama")
		.setColor("RANDOM")
		.addField("NAMA", message.author.username);
		
		message.channel.send(embed);
		
	}
});





///ini bot login dan akan di arahkan ke script your_setting.json jangan di ubah kalo belum mengerti!

bot.login(settings.token).catch(err=> console.log("Incorrect Token was provided"))