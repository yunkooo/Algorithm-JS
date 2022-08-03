const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,).toString().trim()

input = input.split(' ');

console.log(input[0]==='' ? 0 : input.length);