const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let p = input[0].split(' ');
let n = Number(p[0]);
let k = Number(p[1]);
let arr = input[1].split(' ').map(val => Number(val)).sort((a,b) => b-a);
console.log(arr[k-1]);