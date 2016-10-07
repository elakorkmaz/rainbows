var colors = require('colors');

function makeRainbow(string) {
  console.log(colors.white(string));
  console.log(colors.green(string));
  console.log(colors.cyan(string));
  console.log(colors.blue(string));
  console.log(colors.red(string));
  console.log(colors.magenta(string));
}

for (var i = 2; i < process.argv.length; i++) {
  setInterval(makeRainbow, 1000, process.argv[i]);
}
