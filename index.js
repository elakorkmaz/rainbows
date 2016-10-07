var colors = require('colors');

var myString = 'Hello World!';

function makeRainbow() {
  console.log(myString);
  console.log(myString.yellow);
  console.log(myString.green);
  console.log(myString.cyan);
  console.log(myString.blue);
  console.log(myString.red);
  console.log(myString.magenta);
}

setInterval(makeRainbow, 500);
