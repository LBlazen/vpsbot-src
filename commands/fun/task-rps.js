const discord = require('discord.js')
const mongoCurrency = require('discord-mongo-currency');

module.exports = {
    name: "rps",
    description: "play a game of rock, paper and scissors",
    
    run: async(client, message, args) => {
        let embed = new discord.MessageEmbed()
        .setTitle("RPS")
        .setDescription("React with your choice")
        .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗿")
        await msg.react("✂")
        await msg.react("📄")

        const filter = (reaction, user) => {
            return ['🗿', '✂', '📄'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗿', '✂', '📄']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new discord.MessageEmbed()
                .setTitle("RESULT")
                .addField("Your choice", `${reaction.emoji.name}`)
                .addField("My choice", `${me}`)
            await msg.edit(result)
                if ((me === "🗿" && reaction.emoji.name === "✂") ||
                (me === "📄" && reaction.emoji.name === "🗿") ||
                (me === "✂" && reaction.emoji.name === "📄")) {
                    message.reply("You lost!");
            } else if (me === reaction.emoji.name) {
                return message.reply("It's a tie!");
            } else {
                let pointsimp = Math.floor(Math.random() * (40 - 30) + 30);
                mongoCurrency.giveCoins(message.member.id, message.guild.id, pointsimp);
                return message.reply(`You won! You got ${pointsimp} coins!`);



            }
        })
        .catch(collected => {
                message.reply('You ran out of time- cancelling game.');
            })
}
}