const { MessageEmbed } = require('discord.js');
module.exports = {
name: 'shadowban',
aliases : ['sb'],
category : 'moderation',
description: 'shadowbans a user.',
run: async (client, message, args) => {
    // shadowban roleid is 780185033741697074
    // log channel 867551305986998292
   
    // check if user has mod or admin role
    if (!message.member.roles.cache.some(role => role.name === 'Administrator')
    && !message.member.roles.cache.some(role => role.name === 'Manager')
    && !message.member.roles.cache.some(role => role.name === 'Owner')) 
    return message.channel.send("https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif");
    

    if(!args[0]) return message.channel.send("Please provide a user to shadowban.")
    if(!args[1]) return message.channel.send("Please provide a reason for shadowbanning the user.")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Please provide a valid user.")
    if(user.id === message.author.id) return message.channel.send("You cannot shadowban yourself.")
    if(user.id === client.user.id) return message.channel.send("You cannot shadowban me.")
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Please provide a reason for shadowbanning the user.")
    message.channel.send(`${user} has been shadowbanned by ${message.author} for ${reason}`)
    user.roles.add('980404587079008307')
    user.send(`You have been shadowbanned from ${message.guild.name} for ${reason}`)
    const embed = new MessageEmbed()
    .setTitle("Shadowban")
    .setColor("#ff0000")
    .setDescription(`${user} has been shadowbanned by ${message.author} for **${reason}**`)
    .setTimestamp()
    message.guild.channels.cache.get('867551305986998292').send(embed)


}}