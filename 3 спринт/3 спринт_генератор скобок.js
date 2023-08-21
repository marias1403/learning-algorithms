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

    function generateParentheses(n, m, prefix) {
        if (n === 0 && m === 0) {
            console.log(prefix);
        }
        if (n > 0) {
            generateParentheses(n - 1, m, prefix + '(');
        }
        if (m > n) {
            generateParentheses(n, m - 1, prefix + ')');
        }
    }
    generateParentheses(n, n, '');
});