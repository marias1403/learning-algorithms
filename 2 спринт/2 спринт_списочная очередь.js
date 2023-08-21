class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let head = null;
let tail = null;
let queueSize = 0;

function get() {
    if (queueSize === 0) {
        console.log('error');
        return;
    } else {
        queueSize -= 1;
        let deleted = head;
        head = deleted.next;
        deleted.next = null;
        console.log(deleted.value);
        return;
    }
}

function put(x) {
    if (queueSize === 0) {
        head = new Node(x, null);
        queueSize += 1;
        return;
    } if (queueSize === 1) {
        tail = new Node(x, null);
        head.next = tail;
        queueSize += 1;
        return;
    } else {
        let newNode = new Node(x, null);
        tail.next = newNode;
        tail = newNode;
        queueSize += 1;
        return;
    }
}

function size() {
    console.log(queueSize)
}

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
        if (lines[i].includes('put')) {
            pushArr = lines[i].split(' ');
            put(+pushArr[1]);
        }
        if (lines[i] === 'get') {
            get();
        }
        if (lines[i] === 'size') {
            size();
        }
    }
});