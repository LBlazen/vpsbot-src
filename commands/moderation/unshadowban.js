const { MessageEmbed } = require('discord.js');
module.exports = {
name: 'unshadowban',
aliases : ['usb'],
category : 'moderation',
description: 'unshadowbans a user.',
run: async (client, message, args) => {
    // shadowban roleid is 780185033741697074

     // check if user has mod or admin role
     if (!message.member.roles.cache.some(role => role.name === 'Administrator')
     && !message.member.roles.cache.some(role => role.name === 'Manager')
     && !message.member.roles.cache.some(role => role.name === 'Owner')) 
     return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
     
    if (!args[0]) return message.channel.send("Please provide a user to unshadowban!");
// give the shadowban role to the user
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!user) return message.reply("Please mention a valid member of this server");
    user.roles.remove('980404587079008307');
    message.channel.send(`${user} has been unshadowbanned.`);

    

    


   

}}