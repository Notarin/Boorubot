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
    switch (message.channel.nsfw) {
      case true:
        var rating = "e";
        console.log("nsfw");
        break;
      case false:
        var rating = "s";
        console.log("sfw");
        break;
    }
    console.log("request recieved");
    message.reply('request recieved');
    let strargs = args.toString();
    let newargs = strargs.replace(/,/g, '+');
    require("request")("https://yande.re/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
        message.channel.send(data['0'].sample_url)
      }
      else {
        message.channel.send("no post found:(")
      }
      });
  }
  if (command === 'konachan') {
    switch (message.channel.nsfw) {
  case true:
    var rating = "e";
    console.log("nsfw");
    break;
  case false:
    var rating = "s";
    console.log("sfw");
    break;
}
    console.log("request recieved");
    message.reply('request recieved');
    let strargs = args.toString();
    let newargs = strargs.replace(/,/g, '+');
    require("request")("https://konachan.com/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
        message.channel.send(data['0'].sample_url)
      }
      else {
        message.channel.send("no post found:(")
      }
      });
  }
  if (command === 'danbooru') {
    switch (message.channel.nsfw) {
  case true:
    var rating = "e";
    console.log("nsfw");
    break;
  case false:
    var rating = "s";
    console.log("sfw");
    break;
}
    console.log("request recieved");
    message.reply('request recieved');
    let strargs = args.toString();
    let newargs = strargs.replace(/,/g, '+');
    require("request")("https://danbooru.donmai.us/posts.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
        message.channel.send(data['0'].file_url)
      }
      else {
        message.channel.send("no post found:(")
      }
      });
  }
});

const TOKEN = require("./TOKEN.js")

client.login(TOKEN);
