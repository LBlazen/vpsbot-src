const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const { MessageCollector } = require("discord.js-collector");
const mongoose = require('mongoose')
const fetch = require('node-fetch')

const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const { MessageEmbed } = require("discord.js");
const URI = config.mongodb_srv
const profileModel = require("./handlers/profileSchema")
const mongoCurrency = require('discord-mongo-currency')

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`Sparky for VPS`)
    console.log(`${client.user.username} ✅`)

})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})






mongoose.connect(URI, { useUnifiedTopology: true } 
    );
    
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    } )

    mongoCurrency.connect(URI);

client.login(token)
