const { Discord, Client, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");
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

client.login(token);
