const Discord = require('discord.js');

module.exports = {
  name: "announce",
  aliases: ['anc'],
  usage: 'c!anc <context>',
  permission: 'ADMINISTRATOR',
  description: "Announcement command for administrator",
  run: async (client, message, args) => {
    let embed1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor("Error! | No permission!")
    .setDescription("Sorry, but you require `ADMINISTRATOR` permission to use this!");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(embed1);
    // we can do(["ADMINISTRATOR", "KICK_MEMBERS", "BAN_MEMBERS"]) in line 130. we use these []because these makes us mention a lot of permissions

    let Joined = args.join(" ");
    let embedd = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("News!")
      .setDescription(Joined)
      .setFooter(`Message sent by ${message.author.username}`);

    let Channel = message.guild.channels.find(
      c => c.id === "720467326251696138"
    );
    Channel.send(embedd);
    message.delete();
  }
}