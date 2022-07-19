const fs = require('fs');
const filePath= process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n').map(a => a.split(' '));
let n=Number(input[0][0]), t=Number(input[0][1]);
let arr = input[1];


arr = arr.filter(a => a<t).join(' ');
console.log(arr);
