
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const talkedRecently = new Set();
const mongoCurrency = require('discord-mongo-currency');

const points = Math.floor(Math.random() * 100) + 25; // Random amount of coins.


//   {
//  lvlimage: "",
//  difficulty: "Impossible",
//  correct: ``
// },



let guess = [
  
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978907115716628/Screenshot_20211216-135337_VPS.png",
    difficulty: "Easy",
    correct: `FREE DEMON`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978946705719296/Screenshot_20211216-135404_VPS.png",
    difficulty: "Easy",
    correct: `FLAME BURST`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978979702337576/Screenshot_20211216-135431_VPS.png",
    difficulty: "Easy",
    correct: `AMONG US`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920979023474085898/Screenshot_20211216-140053_VPS.png",
    difficulty: "Easy",
    correct: `DASH CIRCLES`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920979429424005164/Screenshot_20211216-140245_VPS.png",
    difficulty: "Easy",
    correct: `QUWENCH`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949656471694606376/unknown.png",
    difficulty: "Easy",
    correct: `GOODMORNINGME`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949658540782526535/Screenshot_20220305-172341_VPS.png",
    difficulty: "Easy",
    correct: `BETA TEST ZERO`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949659485939564634/unknown.png",
    difficulty: "Easy",
    correct: `KINDNESS`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949660282526003220/Screenshot_20220305-173039_VPS.png",
    difficulty: "Easy",
    correct: `FIREWORKNT`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705703738708038/unknown.png",
    difficulty: "Impossible",
    correct: `COCK TRIAL`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705844000444496/unknown.png",
    difficulty: "Hard",
    correct: `PARAPLEGIC SPIDERMAN`
  },
 
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949706454678515822/unknown.png",
    difficulty: "Impossible",
    correct: `VPS IS DYING`
  },
 
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949706469044019321/unknown.png",
    difficulty: "Hard",
    correct: `IF SHE PLAYS ROBLOX`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949658200397979688/unknown.png",
    difficulty: "Impossible",
    correct: `SLY RACE`
  },

  // MEDIUM LEVELS


  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920980708133064754/Screenshot_20211216-140809_VPS.png",
    difficulty: "Medium",
    correct: `FIRE IN MY CLOSET`
  },
    {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949685476212740127/Screenshot_389.png",
    difficulty: "Medium",
    correct: `VOIDAL`
  },
]


module.exports = {
  name: "weekly",
  aliases : ['w'],
  category : 'sparky',

  description: "weekly rewards if you answer a hard or impossible level.",
  run: async (client, message, args) => {


    if (talkedRecently.has(message.author.id)) {
      const Embed1 = new MessageEmbed()
      .setTitle("<a:discordloading:929108406734815342> Please wait Another week to play again!")
      .setColor(`WHITE`)
       message.channel.send(Embed1)  
} else {


    let q = guess[Math.floor(Math.random()*(guess.length))];
    let i = 0;

    const Embed = new MessageEmbed()
    .setTitle("Guess the level!")
    .setDescription(`Difficulty: ${q.difficulty}`)
    .addField('IMPORTANT', 'the person who plays, is the only one who can answer his' )
    .setImage(q.lvlimage)
    .setColor(`GREEN`)
    .setFooter(`Requested by ${message.author.tag} | Provided time : 60 Seconds`)
message.channel.send(Embed)

let gd = m => m.author.id === message.author.id
      message.channel.awaitMessages(gd, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == q.correct) {

            const Embed1 = new MessageEmbed()
            .setTitle("✅ Correct!")
            .setDescription(`You've earned ${points} points! Play again next week using v?g`)
            .setColor(`WHITE`)
             message.channel.send(Embed1)         
             mongoCurrency.giveCoins(message.member.id, message.guild.id, points);



       }
       else {
        const Embed1 = new MessageEmbed()
        .setTitle("❎ Incorrect, try again next week.")
        .setColor(`WHITE`)
         message.channel.send(Embed1)    
       }
        })
        .catch(collected => {
          const Embed3 = new MessageEmbed()
          .setTitle("🕐 You did not just skip a weekly mf")
          .setColor(`WHITE`)
           message.channel.send(Embed3) 
        });
      }
    talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 604800000);
    }
  
};
