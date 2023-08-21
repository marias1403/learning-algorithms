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
    let arr = lines[0].split(' ');
    let n = +arr[0];

    if (n === 0 || n === 1) {
        console.log(1);
        return;
    }

    let k = +arr[1];
    let degree = 1;
    for (let i = 1; i <= k; i++) {
        degree *= 10;
    }

    let sum1 = 1;
    let sum2 = 1;
    for (let i = 3; i<=n;i++) {
        let newSum = (sum1 + sum2) % degree;
        sum1 = sum2
        sum2 = newSum
    }

    console.log((sum1 + sum2) % degree);
});