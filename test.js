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

  function bigNumber(nums) {
    const numStrings = nums.map(num => num.toString());

    numStrings.sort((a, b) => (b + a).localeCompare(a + b));

    const largestNum = numStrings.join('');

    console.log(largestNum);
  }

  bigNumber(arr);
});
