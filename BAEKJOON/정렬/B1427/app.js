const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim();

input = input.split('').sort((a,b) => b-a).join('')

console.log(input);