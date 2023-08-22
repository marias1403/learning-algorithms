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
    let clicks = lines[0].split('');
    let n = clicks.length;
    let buttons = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    let string = '';
    let res = [];

    function combination(n, string) {
        if (n === 0) {
            res.append(string);
        }
        combination(n - 1, string);
    }
    combination(n, string);
    console.log(res);
});