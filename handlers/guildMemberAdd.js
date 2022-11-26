const profileModel = require("profileSchema");

module.exports = async (client, discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 0,
    profile: 0,
  });
  profile.save();
};