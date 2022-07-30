const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(a => +a);

let max = Math.max(...arr);

let sum = arr.map(val => val/max*100).reduce((acc, cur) => acc+cur)
console.log(sum/n);