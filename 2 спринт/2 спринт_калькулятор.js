class Stack{
    constructor() {
        this.items = [];
    }

    push(x) {
        this.items.push(x);
    }

    pop() {
        return this.items.pop();
    }
}

let stack = new Stack();

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
    console.arr;
    let firstOperand = null;
    let secondOperand = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            secondOperand = +stack.pop();
            firstOperand = +stack.pop();
            stack.push(firstOperand + secondOperand);
        } else if (arr[i] === '-') {
            secondOperand = +stack.pop();
            firstOperand = +stack.pop();
            stack.push(firstOperand - secondOperand);
        } else if (arr[i] === '*') {
            secondOperand = +stack.pop();
            firstOperand = +stack.pop();
            stack.push(firstOperand * secondOperand);
        } else if (arr[i] === '/') {
            secondOperand = +stack.pop();
            firstOperand = +stack.pop();
            stack.push(Math.floor(firstOperand / secondOperand));
        } else {
            stack.push(arr[i]);
        }
    }
    console.log(stack.pop());
});