const { MessageEmbed } = require('discord.js');


module.exports = {

        name: "ban",
        aliases: ["b", "banish"],
        description: "Bans the user",

    run: async (bot, message, args) => {
     
        // Check if the user has the permission to use this command
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
        // Check if the user has provided a user to ban
        if (!args[0]) return message.channel.send("Please provide a user to ban!");
        // Check if the user has provided a reason
        if (!args[1]) return message.channel.send("Please provide a reason for this action!");
        // ban user
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!user) return message.reply("Please mention a valid member of this server");
        let reason = args.slice(1).join(' ');
        //check if user is bannable
        if(!user.bannable) return message.channel.send("I cannot ban this user!");
        user.ban().then(() => {

            let banEmbed = new MessageEmbed()
            .setTitle("**__Ban Report__**")
            .setDescription(`**<@${user.user.id}> has been banned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Ban\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(banEmbed)
        } 
     
        
        )   
    }
};