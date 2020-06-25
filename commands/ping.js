const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Bot ping',
    usage: 'c!ping',
    permission: 'None',
    run: async (client, message, args) => {
        let ping = new Discord.RichEmbed()
        .setAuthor("Bot latency")
        .setColor("RANDOM")
        .setDescription('Ping?')
        
        let ping2 = new Discord.RichEmbed()
        .setAuthor("Bot latency")
        .setColor("RANDOM")
        .addField("Ping!", "Bot Ping: " + `${new Date().getTime() - message.createdTimestamp}ms.` + "\n" + "Websocket Ping: " + `${Math.round(client.ping)}ms.`
    )
    
    message.channel.send(ping).then((msg)=> {
  setTimeout(function(){
    msg.edit(ping2);
  }, 1000)
}); 
      
    }
}