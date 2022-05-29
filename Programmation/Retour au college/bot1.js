var ircClient = require('node-irc');
var client = new ircClient('irc.root-me.org', 6667, 'yasin', 'SomeFullname');
client.on('ready', function () {
    client.join('#root-me_challenge');
    client.say('Candy', "!ep1")
  });
client.on('PRIVMSG',function(data){
    const myArray = data.message.split(" / ")
    const number = Math.sqrt(myArray[0])*myArray[1]
    const resp = "!ep1 -rep "+number.toFixed(2)
    client.say(data.sender, resp)
    console.log(data.message)
})
client.connect()
