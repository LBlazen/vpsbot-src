const { MessageEmbed } = require("discord.js")

module.exports = {
        name: "unmute",
        aliases: ["um"],
        description: "Unmutes a member in the discord!",
        category: "moderation",

    run : async (bot, message, args) => {
        // Check if the user has the permission to use this command.
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");

        // Check if the user has mentioned a member and is not the bot.
        if (!message.mentions.members.first()) return message.channel.send("Please mention a valid member of this server");

        // Check if the user has provided a reason.
        if (!args[1]) return message.channel.send("Please provide a reason for this action.");

        // Define the reason, member, and guild.
        let reason = args.slice(1).join(' ');
        let member = message.mentions.members.first();
        let guild = message.guild;

        // Check if the user is muted.
        if (!member.roles.cache.has(guild.roles.cache.find(r => r.name === "Muted").id)) return message.channel.send("This user is not muted!");

        // Remove the muted role.
        member.roles.remove(guild.roles.cache.find(r => r.name === "Muted"));

        // Define the embed.
        let embed = new MessageEmbed()
            .setTitle("**__Unmute Report__**")
            .setDescription(`**<@${member.user.id}> has been unmuted by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Unmute\``)
            .addField(`**Moderator:**`, `${message.author}`)


        // Send the embed.
        message.channel.send(embed)
        // Send the embed in the mod-logs channel.






      
    

}
};