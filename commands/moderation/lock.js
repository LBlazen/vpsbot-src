const { MessageEmbed } = require("discord.js");

module.exports = {

        name: "lock",
        description: "lock channel",
        category: "moderation",
        aliases: [],
    run: async (bot, message, args) => {

        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
        // lock channel
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if(!channel) return message.reply("Please mention a valid channel");
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        })
        .then(channel => message.channel.send(`locked ${channel}`))
        .catch(error => message.channel.send(`can't lock because of : ${error}`));
        let embed = new MessageEmbed()
        .setTitle("**__Lock Report__**")
        .setDescription(`**<@${channel.name}> has been locked by <@${message.author.id}>**`)
        .addField(`**Action:**`, `\`Lock\``)
        .addField(`**Moderator:**`, `${message.author}`)

        message.channel.send(embed)

    }
}