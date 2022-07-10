const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('/n');
input = input[0].split(' ');

let A=input[0], B=input[1];
solution(A, B)

function solution(A,B){
    console.log(A-B);
}