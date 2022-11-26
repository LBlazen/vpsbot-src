const mongoCurrency = require('discord-mongo-currency');
const { MessageEmbed } = require('discord.js');

const {Collection, Client, Discord} = require('discord.js')
module.exports = {
    name: "leaderboard",
    aliases : ['lb'],
    category : 'sparky',
    description: "",
  
run: async (client, message, args) => {

    const leaderboard = await mongoCurrency.generateLeaderboard(message.guild.id, 10);
    
    if (leaderboard.length < 1) return message.channel.send("Nobody's on the leaderboard.");
    
    const mappedLeaderboard = leaderboard.map(i => `${client.users.cache.get(i.userId) ? client.users.cache.get(i.userId) : "Nobody"} - ${i.coinsInWallet}`);
    

    // give medals to the top 3 then send the rest
    const top3 = mappedLeaderboard.slice(0, 3);
    const rest = mappedLeaderboard.slice(3);

    const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Leaderboard")
    .setDescription(`🏅${top3.join("\n🏅")}\n\n${rest.join("\n")}`)
    message.channel.send(embed);


    }
    

}