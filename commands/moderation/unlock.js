const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "unlock",
        description: "unlock channel",
        category: "moderation",
        aliases: [],
    
    run : async (bot, message, args) => {

        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
// unlock channel
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if(!channel) return message.reply("Please mention a valid channel");
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        .catch(error => message.channel.send(`can't unlock because of : ${error}`));
        let embed = new MessageEmbed()
        .setTitle("**__Unlock Report__**")
        .setDescription(`**<#{channel.id}> has been unlocked by <@${message.author.id}>**`)
        .addField(`**Action:**`, `\`Unlock\``)
        .addField(`**Moderator:**`, `${message.author}`)

        message.channel.send(embed)
    }
};
