const Discord = require('discord.js');
const cpuStat = require('cpu-stat');
const os = require('os');

module.exports = {
  name: 'botusage',
  aliases: ['bu', 'bous'],
  description: 'Show bot usage',
  permission: 'None',
  usage: 'c!bous',
  run: async (client, message, args) => {
    var avgClockMHzCore0 = cpuStat.clockMHz(0);
     var avgClockMHzCore1 = cpuStat.clockMHz(1);
     var avgClockMHzCore2 = cpuStat.clockMHz(2);
     cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
        return console.log(err)
      }
     let embed = new Discord.RichEmbed()
     .setAuthor("Bot Usages")
     .addField("• RAM Usage", Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + "MB", true)
     .addField("• CPU", `${os.cpus().map(i => `${i.model}`)[0]}`)
     .addField("• CPU usage", `${percent.toFixed(2)}%`, true)
     .addField("• Arch", `${os.arch()}` + "bit", true)
     .addField("• Total Cores", `${cpuStat.totalCores()}`, true)
     .addField("• Clock Speed", `${cpuStat.avgClockMHz()}` + "MHz", true)
     .setColor("RANDOM")
     message.channel.send(embed);
   });
  }
}