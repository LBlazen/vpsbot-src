// make a serverinfo command

const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {
    name : 'serverinfo',
    category : 'utiliy',
    description : 'shows information about the server',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
// make a serverinfo command

    // get the guild
    const guild = message.guild
        // get the guild's banner
        const banner = guild.bannerURL

    // make a serverinfo command embed
    const embed = new MessageEmbed()
        .setTitle(`${guild.name}`)
        .setThumbnail(guild.iconURL())
        .setColor('RANDOM')
        .addField('ID', guild.id, true)
        .addField('Owner', guild.owner.user.tag, true)
        .addField('Region', guild.region, true)
        .addField('Created At', guild.createdAt, true)
        .addField('Joined At', guild.joinedAt, true)
        .addField('Member Count', guild.memberCount, true)
        .addField('Role Count', guild.roles.cache.size, true)
        .addField('Emoji Count', guild.emojis.cache.size, true)
        .addField('Channel Count', guild.channels.cache.size, true)
        .addField('Verification Level', guild.verificationLevel, true)
        .addField('Explicit Content Filter', guild.explicitContentFilter, true)
        .addField('Default Message Notification', guild.defaultMessageNotifications, true)
        .setImage(guild.bannerURL)
    message.channel.send(embed)


        


    }}