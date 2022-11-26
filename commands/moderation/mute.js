const { MessageEmbed } = require("discord.js");

module.exports = {

        name: "mute",
        aliases: ["m"],
        description: "Mutes a member in the discord!",
        category: "moderation",

    run: async (bot, message, args) => {
      
        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please mention a valid member of this server");
            
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            member.roles.add(message.guild.roles.cache.find(r => r.name === "Muted"));
            member.send(`You have been muted by <${message.author.username}> for this reason: ${reason}`)
            .catch(error => message.channel.send(`Can't mute because of : ${error}`));
            let muteEmbed = new MessageEmbed()
            .setTitle("**__Mute Report__**")
            .setDescription(`**<@${member.user.id}> has been muted by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Mute\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(muteEmbed)

            



    }
}