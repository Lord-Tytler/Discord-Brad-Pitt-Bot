const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  var images = 20;
  var number = Math.floor(Math.random() * images + 1);
  
  if (msg.content.includes('brad') || msg.content.includes('pitt')) {
    msg.channel.send('Did somebody say Bradd Pitt?');
	msg.channel.send( {files: ["./images/" + number + ".jpg"]} )
  } else if (msg.content.includes('Brad') || msg.content.includes('Pitt')) {
    msg.channel.send('Did somebody say Bradd Pitt?');
	msg.channel.send( {files: ["./images/" + number + ".jpg"]} )
  } else if (msg.content.includes('Brad') || msg.content.includes('pitt')) {
    msg.channel.send('Did somebody say Bradd Pitt?');
	msg.channel.send( {files: ["./images/" + number + ".jpg"]} )
  } else if (msg.content.includes('brad') || msg.content.includes('Pitt')) {
    msg.channel.send('Did somebody say Bradd Pitt?');
	msg.channel.send( {files: ["./images/" + number + ".jpg"]} )
  }
});

client.login('NzI0ODI5MTE5NDkzMTc3MzQ2.XvF7GA.6m071mwhFR4fvbkw1p3VCuf7Q80');