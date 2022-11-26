const { MessageEmbed } = require("discord.js");

module.exports = {
          name: "slowmode",
          description: "Set the slowmode for the channel!",
          category: "moderation",
          aliases: ['sm'],

  run : async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if(!channel) return message.reply("Please mention a valid channel");
    if(!args[1]) return message.reply("Please specify a time in seconds!");
    channel.setRateLimitPerUser(args[1])
    .catch(error => message.channel.send(`Can't set slowmode because of : ${error}`));
    let embed = new MessageEmbed()
    .setTitle("**__Slowmode Report__**")
    .setDescription(`**<@${channel.name}> has been set to ${args[1]} seconds by <@${message.author.id}>**`)
    .addField(`**Action:**`, `\`Slowmode\``)
    .addField(`**Moderator:**`, `${message.author}`)

 message.channel.send(embed)


  }
};

