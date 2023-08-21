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

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

rl.on('line', readLine).on('close', () => {
    let n = +lines[0];
    console.log(fibonacci(n));
});