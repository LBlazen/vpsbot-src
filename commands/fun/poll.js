const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const fetch = require("node-fetch");
module.exports = {
  name: "poll",
  aliases : ['p'],
  category : 'fun',

  description: "makes a poll.",
  run: async (client, message, args) => {
 // make poll command


    // check if there is a question
    if(!args[0]){
        return message.channel.send(`Please provide a question.\n\nExample: \`${prefix}poll <question>\``)
    }

    // react to message
    message.react('👍')
    message.react('👎')

    







}}