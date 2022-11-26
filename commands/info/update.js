// require embed from discord
 const { MessageEmbed } = require("discord.js");
    const { readdirSync } = require("fs");

module.exports = {
    name: "update",
    aliases : ['u'],
    category : 'info',

    description: "Shows the newest update!.",
    run: async (client, message, args) => {
    
    //show update
    let embed = new MessageEmbed()
    .setTitle("📬 V1.5 Update! ")
    .setColor('RANDOM')
    .setDescription(`

    **📝 New Commands:**
    \`\`\`
- Added Shadowban command.
- Added TempShadowban command.
- Added unShadowban command.

     \`\`\`
    `)


    
    //send embed
    message.channel.send(embed)


    
    }}  