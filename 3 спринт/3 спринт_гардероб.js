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
  let k = +lines[0];
  let arr;
  if (!lines[1]) {
    console.log(k.toString());
    return;
  } else {
    arr = lines[1].split(' ');
  }

  function countingSort(array, k) {
    const countedValues = new Array(k).fill(0);
    for (const value of array) {
      countedValues[value]++;
    }

    let index = 0;
    for (let value = 0; value < k; value++) {
      for (let amount = 0; amount < countedValues[value]; amount++) {
        array[index] = value;
        index++;
      }
    }
    console.log(array.join(' '));
  }
  countingSort(arr, k)
});
