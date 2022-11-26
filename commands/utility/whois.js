const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const axios = require('axios');
module.exports = {
    name : 'whois',
    category : 'utility',
    description : 'shows information about the user',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
// userid or name
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let member = message.guild.member(user);
        let createdAt = moment(user.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a');
        let joinedAt = moment(member.joinedAt).format('dddd, MMMM Do YYYY, h:mm:ss a');
        let game = user.presence.game;
        let avatar = user.displayAvatarURL();
      

      
        let embed = new MessageEmbed()

            .setColor('#0099ff')
            .setThumbnail(avatar)
            .setTitle(`${user.username}'s Info`)
            .addField('Created At', createdAt, true)
            .addField('Joined At', joinedAt, true)

            .addField('Status' , user.presence.status)
            .addField('Game', game ? game.name : 'None', true)
            // display roles with @everyone
            .addField('Roles', member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' ') || 'None')
            .addField('Highest Role', member.roles.highest.name)
           

            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());
        message.channel.send(embed);

       

    }}
