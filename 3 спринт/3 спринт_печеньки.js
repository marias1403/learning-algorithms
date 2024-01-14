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

function cookies(children, sizes) {
  children.sort((a,b) => a - b);
  sizes.sort((a,b) => a - b);

  let i = 0;
  let j = 0;

  while (i < children.length && j < sizes.length) {
    if (children[i] <= sizes[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i;
}

function solve() {
  const childrenSize = readInt();
  const children = readArray();
  const sizesSize = readInt();
  const sizes = readArray();

  const result = cookies(children, sizes);

  process.stdout.write(`${result}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
  _curLine++;
  return arr;
}
