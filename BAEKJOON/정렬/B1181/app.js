const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input.shift();
input = Array.from(new Set(input));

let arr = input.sort((a,b) => {
    if(a.length !== b.length) return a.length-b.length;
    else return a.localeCompare(b);
}).join('\n');


console.log(arr);