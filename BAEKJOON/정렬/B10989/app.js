const fs =require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();

let arr = input.map(val => parseInt(val));
arr = arr.sort((a,b) => a-b).join('\n');
console.log(arr);