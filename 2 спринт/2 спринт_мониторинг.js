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
    let matrix = [];
    let n = +lines[0];
    let m = +lines[1];
    let resLine = [];
    for (let i = 2; i < lines.length; i++) {
        matrix.push(lines[i].split(' '));
    }
    for (let i = 0; i < m; i++) {
        resLine = [];
        for (let j = 0; j < n; j++) {
            resLine.push(matrix[j][i]);
            console.log(matrix[j][i]);
        }
        console.log(resLine.join(' '));
    }
});