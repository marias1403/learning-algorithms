let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

function readLine (line) {
  if (line.trim() !== '') {
    lines.push(line);
  }
}

rl.on('line', readLine).on('close', () => {
  let n = +lines[0];
  let arr = lines[1].split(' ');
  let k = +lines[2];

  function conferenceLovers(n, array, k) {

  }
  conferenceLovers(n, arr, k)
});
