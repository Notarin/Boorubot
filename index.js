//grag nodes
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "&";
const conf = require("./config.json");

//say bot name on boot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//triggers on messages
client.on("message", message => {
  //if its a message from a bot, quit
  if (message.author.bot) return;
  //if it doesnt have the prefix, quit
  if (message.content.indexOf(prefix) !== 0) return;
  //splits the message into the command and arguements
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //help command
  if (command === 'help') {
    message.reply('say ' + prefix + 'yandere for a random post from yande.re')
    message.reply('say ' + prefix + 'konachan for a random post from konachan.com')
    message.reply('say ' + prefix + 'danbooru for a random post from danbooru.donmai.us')
  }
  //test command to see both the command and arguments
  if (command === 'test') {
    message.reply('your command was ' + command + ' and arguements were ' + args)
  }
  //pulls post from yandere
  if (command === 'yandere') {
    switch (message.channel.nsfw) {
      //auto nsfw
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
    //changes aruments into a string
    let strargs = args.toString();
    //replaces every comma into a plus in the string
    let newargs = strargs.replace(/,/g, '+');
    //pulls post from api and sends it
    require("request")("https://yande.re/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
          message.channel.send(data['0'].sample_url)
        } else {
          message.channel.send("no post found:(")
        }
      });
  }
  //pulls post from konachan
  if (command === 'konachan') {
    switch (message.channel.nsfw) {
      //auto nsfw
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
    //changes aruments into a string
    let strargs = args.toString();
    //replaces every comma into a plus in the string
    let newargs = strargs.replace(/,/g, '+');
    //pulls post from api and sends it
    require("request")("https://konachan.com/post.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
          message.channel.send(data['0'].sample_url)
        } else {
          message.channel.send("no post found:(")
        }
      });
  }
  //pulls post from danbooru
  if (command === 'danbooru') {
    switch (message.channel.nsfw) {
      //auto nsfw
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
    //changes aruments into a string
    let strargs = args.toString();
    //replaces every comma into a plus in the string
    let newargs = strargs.replace(/,/g, '+');
    //pulls post from api and sends it
    require("request")("https://danbooru.donmai.us/posts.json?limit=1&tags=order%3Arandom+rating%3A" + rating + "+" + newargs,
      function(err, res, body) {
        let data = JSON.parse(body);
        if (data['0'] !== undefined) {
          message.channel.send(data['0'].file_url)
        } else {
            // danbooru restrics its api to two tags
          message.channel.send("either you searched with too many terms or there was no post found")
        }
      });
  }
});

//logs in with token
client.login(conf.token);