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
    let left = 0;
    let right = +lines[0] - 1;
    let mid;
    let arr = lines[1].split(' ');
    let x = +lines[2];
    let res = [];

    function binarySearch(arr, x, left, right) {
        mid = Math.trunc((left + right) / 2);

        if (mid == left) {
            if (arr[left] >= x) {
                res.push(left + 1);
                return;
            } else if (arr[right] >= x) {
                res.push(right + 1);
                return;
            } else {
                res.push(-1);
                return;
            }
        }

        if (arr[mid] < x) {
            return binarySearch(arr, x, mid + 1, right);
        } else {
            return binarySearch(arr, x, left, mid);
        }
    }
    binarySearch(arr, x, left, right);
    binarySearch(arr, x * 2, left, right);
    console.log(res.join(' '));
});