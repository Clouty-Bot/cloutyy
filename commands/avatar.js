const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ['pfp', 'av'],
    usage: 'c!av | c!av <@member>',
    permission: 'None',
    description: "Show specific user avatar",
    run: async (client, message) => {
        let User = message.mentions.users.first();
    if (User) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${User.username}'s avatar`, message.author.avatarURL)
        .setColor("RANDOM")
        .setFooter(`Requested by ${message.author.username}`)
        .setImage(User.avatarURL);
      message.channel.send(embed);
    } else {
      let embed = new Discord.RichEmbed()
        .setAuthor(
          `${message.author.username}'s avatar`
        )
        .setColor("RANDOM")
        .setImage(message.author.avatarURL);
      message.channel.send(embed);
    }
    }
}