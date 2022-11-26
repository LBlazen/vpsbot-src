const { MessageEmbed } = require('discord.js');
const mongoCurrency = require('discord-mongo-currency');
module.exports = {
name: 'removecoins',
aliases : ['rc'],
category : 'sparky',
description: 'aaa.',
run: async (client, message, args) => {

    // check if user is lblazen
    if (message.author.id !== '472042883763929098') return message.channel.send('https://cdn.discordapp.com/attachments/908796016235524116/979077941797478420/caption.gif');
    // check args
    if (!args[0]) return message.channel.send('please provide a user.');
    // get user
    const user = message.mentions.users.first();
    // check if user exists
    if (!user) return message.channel.send('please provide a valid user.');

    // get amount
    const amount = parseInt(args[1]);
    // check if amount is valid
    if (!amount) return message.channel.send('please provide a valid amount.');

    // add coins
    mongoCurrency.deductCoins(user.id, message.guild.id, amount);
    // send message
    message.channel.send(`${user.tag} now got removed ${amount} coins.`);

    // log
    console.log(`${message.author.tag} removed ${amount} coins to ${user.tag}`);
    // log any errors
}
}

