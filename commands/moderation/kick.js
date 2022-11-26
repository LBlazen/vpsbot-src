const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "kick",
        category: "moderation",
        description: "Kicks the user",
        aliases: [],

    run : async (bot, message, args) => {
      
        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
        // Check if the user has provided a user to kick
        if (!args[0]) return message.channel.send("Please provide a user to kick!");
        // Check if the user has provided a reason
        if (!args[1]) return message.channel.send("Please provide a reason for this action!");
        // kick user
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!user) return message.reply("Please mention a valid member of this server");
        let reason = args.slice(1).join(' ');
                //check if user is bannable
        if(!user.kickable) return message.channel.send("I cannot kick this user!");
        user.kick().then(() => {
            let kickEmbed = new MessageEmbed()
            .setTitle("**__Kick Report__**")
            .setDescription(`**<@${user.user.id}> has been kicked by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Kick\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(kickEmbed)
        }
        )
}
}