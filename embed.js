const Discord = require('discord.js');


const Client = new Discord.Client();

const OwnerID = "455029939297714177";


const prefix = "/";




Client.on("message", async (message) => {

	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;


	let command = message.content.split(" ")[0];

	command = command.slice(prefix.length);


	let args = message.content.split(" ").slice(1);


	if (command === "ping") {

		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);

	} else


	if (command === "say") {

		message.delete()

        const embed = new Discord.RichEmbed()

		.setColor(0x954D23)

		.setDescription(message.author.username + " says: " + args.join(" "));

		message.channel.send({embed})

	} else


	if (command == "help") {

		const embed = new Discord.RichEmbed()

		.setColor(0x954D23)

		.setTitle("Command List:")

		.addField("/help", "Dapatkan Bantuan CMD Bot")

		.addField("/rainbow", "Untuk memulai Rainbow Role \nContoh: /rainbow @role")

		.addField("/hapus", "Untuk menghapus pesan \nContoh: /clear 100")
		
		.addField("×••• Mode Admin •••×", "Dalam Mode Admin Diperlukan Role VIP untuk bekerja!")

		.addField("/kick", "Kick member\nContoh: /kick @user")

		.addField("/ban", "ban member\nContoh: /ban @user");
		
		

		message.channel.send({embed})

	}


});

Client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D15Lsw.Z4p-Qk-f-WxlhiHQmOSWhDs2YtM");