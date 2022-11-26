const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'botinfo',
    category : 'utility',
    description : 'shows information about the bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // make credits command
        const embed = new MessageEmbed()
            .setTitle('VPS Utility Information')
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL())
            .addField('<:VerifiedBotDeveloper:960829211516477502> Developer', 'blazen#0001', true)
            .addField('<:previous:957014320942817350> Bot Version', '1.1.0', true)
            .addField('<:javascript:960829023108354050> Bot Language', 'js, Discord.js', true)
            .addField('<:dynoonline:960828969752596490> Bot Uptime', client.uptime, true)
            .addField('🏓 Bot Latency', `${Math.round(client.ws.ping)}ms`, true)
            .addField('<:ServerBadgeBoostLevel0:873331531635122186> Bot Guilds', client.guilds.cache.size, true)
            .addField('<:CH_IconGreyMembers:960826710629163072> Bot Users', client.users.cache.size, true)
            .addField('<:RedCheckInv:960828931899006996> Bot Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField('🔴 Bot Node Version', process.version, true)
            .addField('📅 Bot Created At', client.user.createdAt, true)
          
        message.channel.send(embed)


    
    
    }}