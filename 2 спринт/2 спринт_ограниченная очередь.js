class MyQueueSized {
    constructor(max_size) {
        this.queue = Array.from({ length: max_size }, (value, index) => value);
        this.max_size = max_size;
        this.head = 0;
        this.tail = 0;
        this.queue_size = 0;
        this.x = null;
    }

    is_empty() {
        return this.queue_size === 0;
    }

    push(x) {
        if (this.queue_size === this.max_size) {
            console.log('error');
        } else {
            this.queue[this.tail] = x;
            this.tail = (this.tail + 1) % this.max_size;
            this.queue_size = this.queue_size + 1;
        }
    }

    pop() {
        if (this.is_empty()) {
            console.log('None');
        } else {
            this.x = this.queue[this.head];
            this.queue[this.head] = 'None';
            this.head = (this.head + 1) % this.max_size;
            this.queue_size = this.queue_size - 1;
            console.log(this.x);
        }
    }

    peek() {
        if (this.is_empty()) {
            console.log('None');
        } else {
            console.log(this.queue[this.head]);
        }
    }

    size() {
        console.log(this.queue_size);
    }
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
    let m = +lines[1];
    let pushArr;
    let queue = new MyQueueSized(m);
    for (let i = 2; i <= n + 1; i++) {
        if (lines[i].includes('push')) {
            pushArr = lines[i].split(' ');
            queue.push(+pushArr[1]);
        }
        if (lines[i] === 'pop') {
            queue.pop();
        }
        if (lines[i] === 'peek') {
            queue.peek();
        }
        if (lines[i] === 'size') {
            queue.size();
        }
    }
});