const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('/n');
input = input[0].split(' ').map(a => +a);

let A=input[0], B=input[1], C=input[2];

solution(A,B,C);

function solution(a,b,c){
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);
}
