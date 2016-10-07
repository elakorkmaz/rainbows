var colors = require('colors');

var lyrics = ['Waiting for', 'My words to catch like I\'m trying', 'To strike a match that\'s soaking wet'];

function makeRainbow(string) {
  for (var i = 0; i < string.length; i++); {
    console.log(colors.red(string[0]));
    console.log(colors.green(string[1]));
    console.log(colors.yellow(string[2]));
  }
}

setInterval(makeRainbow, 300, lyrics);
