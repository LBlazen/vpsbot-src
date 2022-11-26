const { MessageEmbed } = require("discord.js")

module.exports = {
    
        name: "unban",
        description: "Unban a user from the guild!",
        category: "moderation",
        aliases: ["ub", "unbanish"],

    run : async (bot, message, args) => {

        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
        // Check if the user has provided a user to ban
        if (!args[0]) return message.channel.send("Please provide a user to unban!");
        // Check if the user has provided a reason
        if (!args[1]) return message.channel.send("Please provide a reason for this action!");
        // unban user
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!user) return message.reply("Please mention a valid member of this server");
        let reason = args.slice(1).join(' ');
        user.unban().then(() => {
            let unbanEmbed = new MessageEmbed()
            .setTitle("**__Unban Report__**")
            .setDescription(`**<@${user.user.id}> has been unbanned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Unban\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(unbanEmbed)
        }
    
        )
    }
}