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
    let arr = lines[1].split(' ');
    let arrSort = [];
    let swapAmount = 0;

    function bubbleSort(arr) {
        for (let j = n - 1; j > 0; j--) {
            let swap = false;
            for (let i = 0; i < j; i++) {
                if (+arr[i] > +arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swap = true;
                    swapAmount++;
                }
            }
            if (!swap) {
                break;
            } else {
                arrSort = arr;
                arrSort = arrSort.join(' ');
                console.log(arrSort);
            }
        }
        if (swapAmount === 0) {
            console.log(arr.join(' '));
        }
    }

    bubbleSort(arr);
});