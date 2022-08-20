const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const total = parseInt(input.shift());
const N = parseInt(input.shift());
let sum = 0;

input = input.map(val => val.split(' '));

for(let i=0; i<N; i++){
    let a = parseInt(input[i][0]);
    let b = parseInt(input[i][1]);

    sum += (a*b);
}

console.log((total==sum) ? 'Yes' : 'No');