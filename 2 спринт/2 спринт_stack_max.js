class StackMax {
    constructor() {
        this.items = [];
    }

    push(x) {
        this.items.push(x);
    }

    pop() {
        if (this.items.length === 0) {
            console.log('error');
        }
        this.items.pop();
    }

    get_max() {
        if (this.items.length === 0) {
            console.log('None');
        } else {
            let max = this.items[0];
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] > max) {
                    max = this.items[i];
                }
            }
            console.log(max);
        }
    }
}

let stack = new StackMax();

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
    let pushArr;
    for (let i = 1; i <= n; i++) {
        if (lines[i] === 'get_max') {
            stack.get_max();
        }
        if (lines[i] === 'pop') {
            stack.pop();
        }
        if (lines[i].includes('push')) {
            pushArr = lines[i].split(' ');
            stack.push(+pushArr[1]);
        }
    }
});