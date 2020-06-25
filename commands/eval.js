const { inspect } = require('util');
const ownerid = ('556530369927708672');
const coownerid = ('556305795885563914');
const Discord = require('discord.js'); 
module.exports = {
name: 'eval',
aliases: ['ev'],
description: 'Only my creator can use this command!',
permission: 'Need to be my creator',
run: async (client, message, args) => {
if(message.author.id !== ownerid && coownerid) {
let noperm = new Discord.RichEmbed()
.setAuthor("Error! | No permission")
.setDescription('Only my creator can use this command!')
.setColor("RANDOM") 
message.channel.send(noperm);
}
if(message.author.id == ownerid && coownerid) {     let toEval = args.join(" ");     let evaluated = inspect(eval(toEval, { depth: 0 } ))     try {       if(toEval) {         let hrStart = process.hrtime()         let hrDiff;         hrDiff = process.hrtime(hrStart)
let eval2 = new Discord.RichEmbed()
.setAuthor("Evaluated")
.setDescription(`${evaluated}`)
.setColor("RANDOM") 
let eval = new Discord.RichEmbed()
.setAuthor("Evaluating!")
.setDescription("Please wait whilst I'm evaluating")
.setColor("RANDOM") 
message.channel.send(eval).then((msg)=> {   setTimeout(function(){     msg.edit(eval2);   }, 1000)
});                } else {
let er = new Discord.RichEmbed()
.setAuthor("Error whilst evaluating")
.setDescription("`Cannot evaluate air`")
.setColor("RANDOM") 
message.channel.send(er);       }     } catch(e) {
let error = new Discord.RichEmbed()
.setAuthor("Error whilst evaluating")
.setDescription("`" + `${e.message}` + "`")
.setColor("RANDOM") 
message.channel.send(error);     }   
}
}
}
