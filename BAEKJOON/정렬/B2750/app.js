const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
let n = input.shift();
input.map(val => Number(val)).sort((a,b) => a-b);
input.forEach(val => console.log(val));