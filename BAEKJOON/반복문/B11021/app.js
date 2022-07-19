const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
let n=input.shift();
let arr = input.map(a => a.split(' '));

for(let i=0; i<+n; i++){
    console.log(`Case #${i}: ${Number(arr[i][0])+Number(arr[i][1])}`);
}