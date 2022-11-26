// require embed
 const { MessageEmbed } = require("discord.js");

module.exports = {

        name: "purge",
        aliases: [],
        category: "moderation",
        description: "Deletes messages from a channel",
    
    run: async (bot, message, args) => {
      
// make sure user has perms
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
// make sure there is a number
if(!args[0]) return message.channel.send("Please specify a number of messages to delete!");
// make sure the number is a number
if(isNaN(args[0])) return message.channel.send("Please specify a valid number!");
// make sure the number is not too big
if(args[0] > 100) return message.channel.send("Please specify a number less than 100!");
// make sure the number is not too small
if(args[0] < 2) return message.channel.send("Please specify a number greater than 1!");
// delete the messages
message.channel.bulkDelete(args[0])
.catch(error => {
    message.channel.send(`Couldn't delete messages because of : ${error}`)
}
)
let embed = new MessageEmbed()
.setTitle("**__Purge Report__**")
.setDescription(`**${args[0]} messages have been deleted by <@${message.author.id}>**`)
.addField(`**Action:**`, `\`Purge\``)
.addField(`**Moderator:**`, `${message.author}`)

message.channel.send(embed)

    }
}