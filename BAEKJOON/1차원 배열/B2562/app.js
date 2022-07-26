const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n').map(a => Number(a));

let max = 0;
let maxIdx;
input.forEach((n,idx) => {
    if(n > max) {
        max = n;
        maxIdx = idx+1;
    }
})
console.log(`${max}\n${maxIdx}`)