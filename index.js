const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.content.toUpperCase() === 'YANRAND') {
	 if (msg.channel.nsfw){
	 var rating = "e"
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

client.on('message', msg => {
 if (msg.content.toUpperCase() === 'KONARAND') {
	 if (msg.channel.nsfw){
	 var rating = "e"
	 console.log("NSFW")
	 }
	 else {
	 var rating = "s"
	 }
console.log("request recieved");
msg.reply('request recieved');
require("request")("https://konachan.com/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
	function(err, res, body) {
	var data = JSON.parse(body);
	msg.channel.send(data['0'].sample_url)
	});
}
});

client.on('message', msg => {
 if (msg.content.toUpperCase() === 'DANRAND') {
	 if (msg.channel.nsfw){
	 var rating = "e"
	 console.log("NSFW")
	 }
	 else {
	 var rating = "s"
	 }
console.log("request recieved");
msg.reply('request recieved');
require("request")("https://danbooru.donmai.us/posts.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
	function(err, res, body) {
	var data = JSON.parse(body);
	msg.channel.send(data['0'].sample_url)
	});
}
});

client.login('NDY3MTgwMzM4Nzk2NTYwMzg1.DybHwQ.LUvws2c20FinCtyXG5fAXR8ldpg');
