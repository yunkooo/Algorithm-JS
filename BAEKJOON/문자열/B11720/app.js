const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
let n = Number(input[0]);
let result = input[1].split('').map(val => Number(val)).reduce((acc, cur)=>{return acc+=cur},0);

console.log(result);