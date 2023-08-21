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

function is_correct_bracket_seq(s) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const st = [];

    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            if (brackets[s[i]] !== st.pop()) {
                console.log('False');
                return;
            }
        } else {
            st.push(s[i]);
        }
    }

    if (st.length === 0) {
        console.log('True');
    } else {
        console.log('False');
    }
}

function isClosedBracket(ch) {
    return [')', ']', '}'].indexOf(ch) > -1;
}

rl.on('line', readLine).on('close', () => {
    if (!lines[0]) {
        console.log('True')
    } else {
        let s = lines[0].split('');
        is_correct_bracket_seq(s);
    }
});