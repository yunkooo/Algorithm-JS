const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = input[0];

console.log(input.charCodeAt());