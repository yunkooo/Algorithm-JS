const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
let n = input.shift();
input = input.map(val => Number(val)).sort((a,b) => {
    if(a>b) return 1;
    if(a<b) return -1;
    if(a===b) return 0;
});
input.forEach(val => console.log(val));