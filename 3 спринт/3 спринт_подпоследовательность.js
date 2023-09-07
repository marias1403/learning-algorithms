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
  let string1 = lines[0].split('');
  let string2 = lines[1].split('');

  function subsequence(s1, s2) {
    let p1 = 0;
    let p2 = 0;
    while (p1 < s1.length && p2 < s2.length) {
      if (s1[p1] === s2[p2]) {
        p1++;
        p2++;
      } else {
        p2++;
      }
    }
    console.log(p1 === s1.length);
  }
  subsequence(string1, string2);
});
