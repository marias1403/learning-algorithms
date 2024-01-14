const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

function subsequence(s1, s2) {
  if (s1.length > s2.length) return false;

  let p1 = 0;
  let p2 = 0;

  while (p1 < s1.length && p2 < s2.length) {
    if (s1[p1] === s2[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }

  return p1 === s1.length;
}

function solve() {
  const s = readLine();
  const t = readLine();
  const result = subsequence(s,t);
  if (result) {
    process.stdout.write(`True`);
  } else {
    process.stdout.write(`False`);
  }
}

function readLine() {
  const n = _inputLines[_curLine];
  _curLine++;
  return n;
}
