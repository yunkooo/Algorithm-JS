const fs =require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();


let arr = input.map(val => val.split(' '));
arr = arr.sort((a,b) => a[0] - b[0]).join('\n').split(',').join(' ');

console.log(arr);