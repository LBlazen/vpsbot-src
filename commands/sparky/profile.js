const mongoCurrency = require('discord-mongo-currency');
const { MessageEmbed } = require('discord.js');
const {Collection, Client, Discord} = require('discord.js')
module.exports = {
    name: "profile",
    aliases : ['p'],
    category : 'sparky',

    description: "",
  
run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.member;

    const user = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.



// if user reaches 5000 coins, they get an embed
if (user.coinsInWallet >= 7000) {
    // create an embed
    const achievements = [
        'Sparky beginner: Have 1,000 Points',
        'True Veteran: Have 5,000 Points' ,
        'Sparky Grinder: Have 7,000 Points' ,
        'Ultimate Guesser: Have 10,000 Points' 

    ]
    const embed2 = new MessageEmbed()
.setTitle(`<:UserBadgeNitroBoosting9Month:873331028603850824> ${member.user.username}'s profile`)
.setDescription(`Score: ${user.coinsInWallet}⭐`)
// multiple fields
.addField('🏅 Achievements', achievements.join('\n'))
.setColor('RANDOM');

message.channel.send(embed2);




} else if (user.coinsInWallet >= 10000) {
    // create an embed
    const achievements = [
        'Sparky beginner: Have 1,000 Points',
        'True Veteran: Have 5,000 Points' ,
        'Sparky Grinder: Have 7,000 Points' 
    ]
    const embed2 = new MessageEmbed()
.setTitle(`<:UserBadgeNitroBoosting9Month:873331028603850824> ${member.user.username}'s profile`)
.setDescription(`Score: ${user.coinsInWallet}⭐`)
// multiple fields
.addField('🏅 Achievements', achievements.join('\n'))
.setColor('RANDOM');

message.channel.send(embed2);




} else if (user.coinsInWallet >= 5000) {
    // create an embed
    const achievements = [
        'True Veteran: Have 5,000 Points' ,
        'Sparky beginner: Have 1,000 Points'
    ] 
    const embed = new MessageEmbed()
    
.setTitle(`<:UserBadgeNitroBoosting9Month:873331028603850824> ${member.user.username}'s profile`)
.setDescription(`Score: ${user.coinsInWallet}⭐`)
.addField('🏅 Achievements', achievements.join('\n'))
.setColor('RANDOM');

message.channel.send(embed);




} else if (user.coinsInWallet >= 1000) {
    // create an embed
    const achievements = [
        'Sparky beginner: Have 1,000 Points'
    ] 
    const embed = new MessageEmbed()
    
.setTitle(`<:UserBadgeNitroBoosting9Month:873331028603850824> ${member.user.username}'s profile`)
.setDescription(`Score: ${user.coinsInWallet}⭐`)
.addField('🏅 Achievements', achievements.join('\n'))
.setColor('RANDOM');

message.channel.send(embed);





} else {
const embed4 = new MessageEmbed()
.setTitle(`<:UserBadgeNitroBoosting9Month:873331028603850824> ${member.user.username}'s profile`)
.setDescription(`Score: ${user.coinsInWallet}⭐`)
.setColor('RANDOM');

message.channel.send(embed4);

}
}
}