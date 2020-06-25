const Discord = require('discord.js')

module.exports = {
  name: 'ban',
  aliases: ['b'],
  description: 'Used to ban a user',
  permission: 'KICK_MEMBERS, BAN_MEMBERS, ADMINISTRATOR',
  usage: 'c!ban <user>',
  run: async (client, message, args) => {
    if (
      !message.member.hasPermission([
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR"
      ])
    ) {
      let embed3 = new Discord.RichEmbed()
      .setAuthor("Error! | No permission!")
      .setDescription("Sorry, but you require either `KICK_MEMBERS`, `BAN_MEMBERS` or `ADMINISTRATOR` permission to use this command")
      .setColor("RANDOM")
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send(embed3);
    }
  
    if (
      message.member.hasPermission([
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR"
      ])
    ) {
    let member = message.mentions.members.first();
    if (!member) {
      let embed2 = new Discord.RichEmbed()
      .setAuthor("Error! | Wrong Usage!")
      .setDescription("`Correct Usage : c!ban <@target>`")
      .setColor("RANDOM")
      message.channel.send(embed2);
    }
    
      if (!member.bannable) {
      let embed1 = new Discord.RichEmbed()
      .setAuthor("Couldn't ban?!")
      .setDescription("I couldn't ban this user! Does this user has higher role than me?")
      .setColor("RANDOM")
      message.channel.send(embed1);
      }
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";

    await member
     .ban(reason)
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Banned!!")
    .setDescription(`${member.user.username} has been banned because: ${reason}`)
    .setColor("RANDOM")
    .setFooter(`Moderator: ${message.author.username}`)
    message.channel.send(embed);
    }
  }
}