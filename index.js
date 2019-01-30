const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "&";
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (command === 'help') {
    msg.reply('say ' + prefix + 'yandere for a random post from yande.re')
    msg.reply('say ' + prefix + 'konachan for a random post from konachan.com')
    msg.reply('say ' + prefix + 'danbooru for a random post from danbooru.donmai.us')
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'yandere')) {
    if (msg.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    msg.reply('request recieved');
    require("request")("https://yande.re/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
      function(err, res, body) {
        let data = JSON.parse(body);
        msg.channel.send(data['0'].sample_url)
      });
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'konachan')) {
    if (msg.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    msg.reply('request recieved');
    require("request")("https://konachan.com/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
      function(err, res, body) {
        let data = JSON.parse(body);
        msg.channel.send(data['0'].sample_url)
      });
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'danbooru')) {
    if (msg.channel.nsfw) {
      let rating = "e"
      console.log("NSFW")
    } else {
      let rating = "s"
    }
    console.log("request recieved");
    msg.reply('request recieved');
    require("request")("https://danbooru.donmai.us/posts.json?limit=1&tags=order%3Arandom+rating%3A" + rating,
      function(err, res, body) {
        let data = JSON.parse(body);
        msg.channel.send(data['0'].file_url)
      });
  }
});

const TOKEN = require("./TOKEN.js")

client.login(TOKEN);
