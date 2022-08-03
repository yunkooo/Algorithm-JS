const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');

let A=Number(input[0].split('').reverse().join(''));
let B=Number(input[1].split('').reverse().join(''));

console.log(A>B ? A:B);