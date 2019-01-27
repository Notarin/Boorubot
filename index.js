const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
	msg.reply('Pong!');
	console.log("derp");
	}
});

client.on('message', msg => {
 if (msg.content === 'yanrand') {
	 if (msg.channel.nsfw = true){
	 var rating = "q"
	 console.log("NSFW")
	 }
	 else {
	 var rating = "s"
	 }
console.log("request recieved");
msg.reply('request recieved');
require("request")("https://yande.re/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
	function(err, res, body) {
	var data = JSON.parse(body);
	msg.channel.send(data['0'].sample_url)
	});
}
});

client.login('NDY3MTgwMzM4Nzk2NTYwMzg1.DybHwQ.LUvws2c20FinCtyXG5fAXR8ldpg');
