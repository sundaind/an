const Discord = require("discord.js");



// This is your client. Some people call it `bot`, some people call it `self`, 

// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,

// this is what we're refering to. Your client.

const client = new Discord.Client();

const bot = new Discord.Client()


// Here we load the config.json file that contains our token and our prefix values. 

const prefix = "/";


// config.token contains the bot's token

// config.prefix contains the message prefix.


 


client.on("message", async message => {

  // This event will run on every single message received, from any channel or DM.

  

  // It's good practice to ignore other bots. This also makes your bot ignore itself

  // and not get into a spam loop (we call that "botception").

  if(message.author.bot) return;

  

  // Also good practice to ignore any message that does not start with our prefix, 

  // which is set in the configuration file.

  if(message.content.indexOf(prefix) !== 0) return;

  

  // Here we separate our "command" name, and our "arguments" for the command. 

  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:

  // command = say

  // args = ["Is", "this", "the", "real", "life?"]

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  

  // Let's go with a few common example commands! Feel free to delete or change those.

  

  if(command === "ping") {

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.

    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)

    const m = await message.channel.send("Ping?");

    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

  }

  

  if(command === "say") {

    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 

    // To get the "message" itself we join the `args` back into a string with spaces: 

    const sayMessage = args.join(" ");

    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

    message.delete().catch(O_o=>{}); 

    // And we get the bot to say the thing: 

    message.channel.send(sayMessage);

  }

  

  if(command === "kick") {

    // This command must be limited to mods and admins. In this example we just hardcode the role names.

    // Please read on Array.some() to understand this bit: 

    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?

    if(!message.member.roles.some(r=>["VIP", "Moderator"].includes(r.name)) )

      return message.reply("Sorry bro lu gak bisa kick orang!");

    

    // Let's first check if we have a member and if we can kick them!

    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.

    // We can also support getting the member by ID, which would be args[0]

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!member)

      return message.reply("Silahkan Tag orangnya gan");

    if(!member.kickable) 

      return message.reply("Maaf saya tidak bisa melakukannya apakah role saya di atas role tersebut? dan apakah saya punya hak izin berikut? mohon cek kembali pengaturan server anda gan");

    

    // slice(1) removes the first part, which here should be the user mention or ID

    // join(' ') takes all the various parts to make it a single string.

    let reason = args.slice(1).join(' ');

    if(!reason) reason = "••••×••••";

    

    // Now, time for a swift kick in the nuts!

    await member.kick(reason)

      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));

    message.reply(`${member.user.tag} Telah berhasil di tendang Bos ${message.author.tag} ==> ${reason}`);


  }

  

  if(command === "ban") {

    // Most of this command is identical to kick, except that here we'll only let admins do it.

    // In the real world mods could ban too, but this is just an example, right? ;)

    if(!message.member.roles.some(r=>["VIP"].includes(r.name)) )

      return message.reply("Lu Gak bisa Banned orang cuk!");

    

    let member = message.mentions.members.first();

    if(!member)

      return message.reply("Tag Orangnya gan");

    if(!member.bannable) 

      return message.reply("gue gak bisa ban orang yang lu tuju! apakah role gue di atas role dia? dan apakah gue punya izin buat ban orang?");


    let reason = args.slice(1).join(' ');

    if(!reason) reason = "••••";

    

    await member.ban(reason)

      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

    message.reply(`${member.user.tag} Berhasil Di tendang dari server,Ada yang bisa gue ban lagi kah boss ${message.author.tag} =×= ${reason}`);

  }

  

  if(command === "hapus") {

    // This command removes all messages from all users in the channel, up to 100.

    

    // get the delete count, as an actual number.

    const deleteCount = parseInt(args[0], 10);

    

    // Ooooh nice, combined conditions. <3

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)

      return message.reply("Silahkan masukan total pesan yg bisa gue hapus, 1-100 gan");

    

    // So we get our messages, and delete them. Simple enough, right?

    const fetched = await message.channel.fetchMessages({limit: deleteCount});

    message.channel.bulkDelete(fetched)

      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

  }

});


client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.XKDmNw.suM15v1im8JeybTyq3wY72uT7OE");
