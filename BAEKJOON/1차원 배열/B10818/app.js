const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(a => +a);
let min = 10000000;
let max = -100000000;

for(let i=0; i<n; i++){
    if(min>arr[i]) min = arr[i];
    if(max<arr[i]) max = arr[i];
}
console.log(`${min} ${max}`);