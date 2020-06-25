const { Discord, Client, Collection } = require("discord.js");
const { prefix } = require("./config.json");
const client = new Client();

client.once("ready", () => {
  console.log("I'm ready!")
});

client.on("ready", () => {
  console.log(
    "Bot: Hosting " +
      `${client.users.size}` +
      " users, in " +
      `${client.channels.size}` +
      " channels of " +
      `${client.guilds.size}` +
      " guilds."
  );

  
  client.on('messageDelete', message => {
  const CHANNEL = 'clouty-log';
  if (message.channel.type == 'text') {
    var logger = message.guild.channels.find(
      channel => channel.name === CHANNEL
    );
    if (logger) {
      const embed = new Discord.RichEmbed()
        .setTitle('Message Deleted')
        .addField('Author', message.author.tag)
        .addField('Message', message.cleanContent)
        .setThumbnail(message.author.avatarURL)
        .setColor('RANDOM');
      logger.send({ embed });
    }
  }
});
  
  client.on('messageUpdate', function(oldMessage, newMessage) {
  const CHANNEL = 'clouty-log';
    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    var log = newMessage.guild.channels.find(
      channel => channel.name === CHANNEL
    );
        
        if (log) {
          const embed = new Discord.RichEmbed()
          .setTitle('Message Edited')
          .addField('Author', newMessage.author.tag)
          .addField('Old Message', oldMessage.cleanContent)
          .addField('New Message', newMessage.cleanContent)
          .setThumbnail(newMessage.author.avatarURL)
          .setColor('RANDOM')
          log.send({ embed });
        }
    }
});
  
  function formatConsoleMessage(message) {
    return message.cleanContent.replace(new RegExp('\n', 'g'), '\n\t');
  }
  
  client.user.setStatus("online");
  client.user.setPresence({
    game: {
      name: `with ${client.users.size} users!`,
      type: "playing",
      url: "https://discord.com/"
    }
  });
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith("boomer")) {
    message.reply("no u");
  }
});

client.login(yourtoken);
