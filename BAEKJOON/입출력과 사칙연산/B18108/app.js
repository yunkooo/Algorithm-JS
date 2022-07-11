const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath,'utf-8'));

solution(input);


function solution(n){
    console.log(n-543);
}