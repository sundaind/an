console.log("[App] Starting Bootup...");

//Discord.js is awesome, and what we are using for this project.

const Discord = require('discord.js');


const ownerID = '402367348364935169' //put your ID here if selfhosting.

const bot = new Discord.Client({fetchAllMembers:true});

//When the bot connects you get this message.

bot.on('ready', () => {

    console.log('[Client] Connected! User: ' + bot.user.username + " - " + bot.user.id);

});


const prefix = '/'

var isPlaying = false

//The variable round is a placeholder for now, is increased every round.

var round = 0

//Empty variable for stats.

var stats = {}

//Starts the bot.

bot.on('message', (msg) => {

  //If the enemy is under 1 hp they die.

  if(stats.HP < 1 && isPlaying == true) {

    isPlaying = false

    round = 0

    msg.channel.sendMessage('🚩Selamat Lu menang.🚩')


  }

  //If you are under 1 hp, you die.

  if(stats.plrHP < 1 && isPlaying == true) {

    isPlaying = false

    round = 0

    msg.channel.sendMessage('Lu Mati Cuk 🤣🤣🤣🤣')

  }

              var input = msg.content.toLowerCase();

//Starts the game and sets the stats.

if(input === prefix + "mulai" && isPlaying == false) {

  //Here is the enemy creation framework.

  stats.enemies = ['Gorila', 'Kecebong', 'Ular Cobra', 'Lord', 'Kambing Hitam', 'Buaya', 'Goblin', 'Skeleton']

    stats.enemy = stats.enemies[Math.floor(Math.random() * stats.enemies.length)]

    //Copy this IF statement and add your enemy to the stats.enemies array, then change Slime to your new enemy.

    //stats.HP is how much health the new enemy will have, and attackMul is multiplies the damage by your number.

  if(stats.enemy == 'Gorila') {

    stats.attackMul = 1.0

      stats.HP = 300

  }

  if(stats.enemy == 'Kecebong') {

    stats.attackMul = 1.25

      stats.HP = 140

  }

  if(stats.enemy == 'Ular') {

    stats.attackMul = 1.50

      stats.HP = 120

  }

  if(stats.enemy == 'Lord') {

    stats.attackMul = 0.5

      stats.HP = 250

  }

  if(stats.enemy == 'Buaya') {

    stats.attackMul = 2.5

      stats.HP = 200

  }

  if(stats.enemy == 'Kambing Hitam') {

    stats.attackMul = 3.0

      stats.HP = 160

  }

  if(stats.enemy == 'Goblin') {

    stats.attackMul = 1.25

      stats.HP = 135

  }

  if(stats.enemy == 'Skeleton') {

    stats.attackMul = 0.75

      stats.HP = 150

  }

  stats.cooldown = 1

  stats.cooldown = 1

  round = round + 1

  isPlaying = true


  stats.plrHP = 40

  stats.maxHP = stats.plrHP

  stats.Mana = 100

stats.fireUsed = 0

  stats.onFire = false

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

}


//Attacks the foe.

if(input === "serang" && isPlaying == true) {


  if(stats.attackMul == 0.5) {

      attackDmg = Math.floor(Math.random() * 16) + 3 / 2

  }

  if(stats.attackMul == 0.75) {

    attackDmg = Math.floor(Math.random() * 16) + 3 / 3


  }

  if(stats.attackMul != 0.5) {

        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul

  }

  if(stats.attackMul != 0.75) {

        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul

  }

  stats.attackChance = ['1', '2', '3', '4', '1', '1', '1', '1', '1', '1']

  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]

  if(stats.missChance == 10) {

    msg.channel.sendMessage('Wew Lu meleset Rupanya')

    stats.plrHP = stats.plrHP - attackDmg

      msg.channel.sendMessage('Lu melawan ' + stats.enemy + ' memberikan ' + attackDmg + ' kerusakan')

      round = round + 1

          stats.cooldown = 1

                    stats.cooldown2 = 1

      if(stats.onFire == true && isPlaying == true) {

            msg.channel.sendMessage('Musuh Terkena Santet Onlen dan \nKehilangan  ' + stats.toTakeAway + ' HitPoin!')

        stats.toTakeAway = 5 * stats.fireUsed

    stats.HP = stats.HP - stats.toTakeAway


    msg.channel.sendMessage('Musuh terkena Santet Onlen dan \nKehilangan ' + stats.toTakeAway + ' Hitpoin!')

      }


      msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

  }

  if(stats.missChance != 10) {

    stats.plrHP = stats.plrHP - attackDmg

      msg.channel.sendMessage('Lu nyerang ' + stats.enemy + ' memberikan' + attackDmg + ' kerusakan')

      round = round + 1

          stats.cooldown = 1

          msg.channel.sendMessage('memberikan ' + attackDmg + ' kerusakan')

          stats.HP = stats.HP - attackDmg

          stats.cooldown2 = 1

      if(stats.onFire == true && isPlaying == true) {

        var attackDmg = Math.floor(Math.random() * 15) + 4


        stats.toTakeAway = 5 * stats.fireUsed

    stats.HP = stats.HP - stats.toTakeAway


    msg.channel.sendMessage('Musuh Terkena Santet Onlen dan \nKehilangan ' + stats.toTakeAway + ' Hitpoin!')

      }

      msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

  }


}


//If you say "heal" and you have enough Mana this code will execute.

if(input === "medkit" && isPlaying == true && stats.Mana > 15) {

  var heal = Math.floor(Math.random() * 13) + 6

  stats.test = heal + stats.plrHP

  stats.plrHP = stats.plrHP + heal

  stats.Mana = stats.Mana - 15

  msg.channel.sendMessage('Lu menggunakan Medkit ' + heal + ' dan mengurangi  25 Energi Lu')

  msg.channel.sendMessage('The foe didn\'t attack.')

  round = round + 1

      stats.cooldown = 1

                stats.cooldown2 = 1

  if(stats.onFire == true && isPlaying == true) {

    stats.toTakeAway = 5 * stats.fireUsed

stats.HP = stats.HP - stats.toTakeAway


msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')

  }

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

}

//If you dont have enough mana this triggers.

if(input === "medkit" && isPlaying == true && stats.Mana < 20) {

msg.channel.sendMessage('Lu kehabisan Energi!')

}

if(input === "bola api" && isPlaying == true && stats.Mana > 5) {


  if(stats.attackMul == 0.5) {

      attackDmg = Math.floor(Math.random() * 16) + 3 / 2

  }

  if(stats.attackMul == 0.75) {

    attackDmg = Math.floor(Math.random() * 16) + 3 / 3


  }

  if(stats.attackMul != 0.5) {

        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul

  }

  if(stats.attackMul != 0.75) {

        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul

  }

  stats.attackChance = ['1', '1', '1', '1', '5', '1', '1', '1', '1', '1']

  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]

  if(stats.missChance == 5) {

    msg.channel.sendMessage('Wew Lu meleset Bro.')

  stats.plrHP = stats.plrHP - attackDmg

  msg.channel.sendMessage('Lu nyerang ' + stats.enemy + ' memberikan' + attackDmg + ' kerusakan')

  round = round + 1

    stats.cooldown = 1

              stats.cooldown2 = 1

  if(stats.onFire == true && isPlaying == true) {

    stats.toTakeAway = 5 * stats.fireUsed

stats.HP = stats.HP - stats.toTakeAway

}

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')




} else {

  var attackDmg = Math.floor(Math.random() * 6) + 2

stats.fireUsed = stats.fireUsed + 1

  stats.Mana = stats.Mana - 3

      stats.cooldown = 1

          stats.cooldown2 = 1

  msg.channel.sendMessage('Lu menggunakan Bola Api dan mengurangi 5 Energi.')

  stats.onFire = true

  if(stats.onFire == true && isPlaying == true) {

    stats.toTakeAway = 5 * stats.fireUsed

stats.HP = stats.HP - stats.toTakeAway


msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')

  }

  stats.plrHP = stats.plrHP - attackDmg

  msg.channel.sendMessage('Lu nyerang ' + stats.enemy + ' memberikan ' + attackDmg + ' kerusakan')

  round = round + 1

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

}

}


//If you dont have enough mana this triggers.

if(input === "bola api" && isPlaying == true && stats.Mana < 5) {

msg.channel.sendMessage('Lu kehabisan Energi!')

}



if(input === "shield" && isPlaying == true && stats.Mana > 0 && stats.cooldown == 1) {


  msg.channel.sendMessage('You blocked the incoming attack.')

  attackDmg = 0.9

  stats.plrHP = stats.plrHP - attackDmg

  msg.channel.sendMessage('The shield blocked most of the damage from the ' + stats.enemy + ' but you still lost ' + attackDmg + ' HP.')

  round = round + 1

  stats.cooldown = 1

  stats.cooldown2 = 1

  if(stats.onFire == true && isPlaying == true) {

                stats.toTakeAway = 5 * stats.fireUsed

        stats.HP = stats.HP - stats.toTakeAway


    msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')



  }

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu: ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')




}

if(input === 'shield' && stats.cooldown == 0) {

  msg.channel.sendMessage('⏰ shield masih cooldown.')

}


if(input === "tampol" && isPlaying == true && stats.Mana > 9 && stats.cooldown2 == 1) {

  var heal = Math.floor(Math.random() * 5) + 2

  stats.test = heal + stats.plrHP

  stats.HP = stats.HP - heal

  stats.plrHP = stats.plrHP + heal

  stats.Mana = stats.Mana - 10

  msg.channel.sendMessage('Lu Nampol Musuh Pake Panci dan Lu mendapat  ' + heal + '++ tambahan Darah dan memakai 10 Energi.')

  msg.channel.sendMessage('The foe didn\'t attack.')

  round = round + 1

    stats.cooldown2 = 0

      stats.cooldown = 1

  if(stats.onFire == true && isPlaying == true) {

    stats.toTakeAway = 5 * stats.fireUsed

stats.HP = stats.HP - stats.toTakeAway


msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')

  }

  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\n💖Darah Lu: ' + stats.plrHP + '\n=> Energi Lu ' + stats.Mana + '\nSerang? Medkit? Bola api? Shield? Tampol?')

}

if(input === 'tampol' && stats.cooldown2 == 0) {

  msg.channel.sendMessage('⏰Panci masih cooldown.')

}

//If you dont have enough mana this triggers.

if(input === "tampol" && isPlaying == true && stats.Mana < 10) {

msg.channel.sendMessage('Lu kehabisan Energi!')

}

//Evaluation command, if you self-hosting this bot replace my user id with yours.

if(msg.content.startsWith(prefix + "eval ")) {

if (msg.author.id != ownerID) return;

try {

var code = msg.content.substring(6);

var evaled = eval(code);

msg.channel.sendCode("xl", (evaled));

} catch(err) {

    msg.channel.sendMessage(

    "`ERROR`" + "\n" + err

    );

  }

}


});













//Bot login.

bot.login('NTQ4NTQxMzk0NTgzNTUyMDAx.XKDmNw.suM15v1im8JeybTyq3wY72uT7OE').catch((err) => console.log(`[Client] Failed to connect: ${err.message}`))

//Saves endless looking around if there is an Uncaught Promise Error.

process.on("unhandledRejection", err => {

  console.error("Uncaught Promise Error: \n" + err.stack);

});
