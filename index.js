const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "&";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    message.reply('say ' + prefix + 'yandere for a random post from yande.re')
    message.reply('say ' + prefix + 'konachan for a random post from konachan.com')
    message.reply('say ' + prefix + 'danbooru for a random post from danbooru.donmai.us')
  }
  if (command === 'test'){
  message.reply('your command was ' + command + 'and arguements were' + args)
  }
  if (command === 'yandere') {
    if (message.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    message.reply('request recieved');
    let newargs = args.replace(/,/g, '+');
    require("request")("https://yande.re/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        message.channel.send(data['0'].sample_url)
      });
  }
  if (command === 'konachan') {
    if (message.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    message.reply('request recieved');
    require("request")("https://konachan.com/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
      function(err, res, body) {
        let data = JSON.parse(body);
        message.channel.send(data['0'].sample_url)
      });
  }
  if (command === 'danbooru') {
    if (message.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    message.reply('request recieved');
    require("request")("https://danbooru.donmai.us/posts.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
      function(err, res, body) {
        let data = JSON.parse(body);
        message.channel.send(data['0'].file_url)
      });
  }
});

const TOKEN = require("./TOKEN.js")

client.login(TOKEN);
