const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('/n');
input = input[0].split(' ').map(a => +a);

let A=input[0], B=input[1];
solution(A,B);


function solution(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(Math.floor(a/b));
    console.log(a%b);
}