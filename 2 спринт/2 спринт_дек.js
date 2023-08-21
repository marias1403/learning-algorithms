class Deque {
    constructor(max_size) {
        this.queue = Array.from({ length: max_size}, (value, index) => value);
        this.max_size = max_size;
        this.head = 0;
        this.tail = 0;
        this.queue_size = 0;
        this.x = null;
    }

    is_empty() {
        return this.queue_size === 0;
    }

    push_back(x) {
        if (this.queue_size === this.max_size) {
            console.log('error');
        } else {
            this.queue[this.tail] = x;
            this.tail = (this.tail + 1) % this.max_size;
            this.queue_size ++;
        }
    }

    push_front(x) {
        if (this.queue_size === this.max_size) {
            console.log('error');
        } else {
            if (this.head === 0) {
                this.head = this.max_size - 1;
            } else {
                this.head --;
            }
            this.queue[this.head] = x;
            this.queue_size ++;
        }
    }

    pop_back() {
        if (this.is_empty()) {
            console.log('error');
        } else {
            if (this.tail === 0) {
                this.tail = this.max_size - 1;
            } else {
                this.tail --;
            }
            this.x = this.queue[this.tail];
            this.queue[this.tail] = 0;
            this.queue_size --;
            console.log(this.x);
        }
    }

    pop_front() {
        if (this.is_empty()) {
            console.log('error');
        } else {
            this.x = this.queue[this.head];
            this.queue[this.head] = 'None';
            this.head = (this.head + 1) % this.max_size;
            this.queue_size --;
            console.log(this.x);
        }
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
    let deque = new Deque(m);
    for (let i = 2; i <= n + 1; i++) {
        if (lines[i].includes('push_back')) {
            pushArr = lines[i].split(' ');
            deque.push_back(+pushArr[1]);
        }
        if (lines[i].includes('push_front')) {
            pushArr = lines[i].split(' ');
            deque.push_front(+pushArr[1]);
        }
        if (lines[i] === 'pop_back') {
            deque.pop_back();
        }
        if (lines[i] === 'pop_front') {
            deque.pop_front();
        }
    }
});