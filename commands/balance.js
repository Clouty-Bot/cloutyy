const Discord = require('discord.js');
const eco = require('discord-economy');

module.exports = {
  name: 'balance',
  aliases: ['bal'],
  description: 'Check your Clouty Economy balance',
  usage: 'c!balance <user>',
  permission: 'None',
  run: async (client, message, args) => {
    var output = await eco.FetchBalance(message.author.id)
    let embed = new Discord.RichEmbed()
    .setAuthor("Clouty Economy")
    .setColor("RANDOM")
    .setDescription(`Hey ${message.author.tag}! You own ${output.balance} coins.`)
    
    message.channel.send(embed);
  }
}