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
    const universityCount = {};
    for (const id of array) {
      if (universityCount[id]) {
        universityCount[id]++;
      } else {
        universityCount[id] = 1;
      }
    }
    const sortedUniversities = Object.keys(universityCount).sort((a, b) => {
      if (universityCount[b] !== universityCount[a]) {
        return universityCount[b] - universityCount[a];
      } else {
        return a - b;
      }
    });
    console.log(sortedUniversities.slice(0, k).join(" "));
  }
  conferenceLovers(n, arr, k)
});
