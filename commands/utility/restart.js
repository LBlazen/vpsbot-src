const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')
const token = config.token
module.exports = {
    name : 'restart',
    category : 'utility',
    description : 'Restarts the bot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
//require user to be sepecific userid
        if(message.author.id !== '472042883763929098') return message.channel.send('https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif');
// stop bot
message.channel.send("restarting...");

        client.destroy();
// restart bot
        client.login(token);

        message.channel.send("restarted!");



    

    }}