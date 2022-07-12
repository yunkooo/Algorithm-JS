const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let A=input[0], B=input[1];

solution(A,B);

function solution(a,b){
    a = +a;
    let arr = b.split('').reverse();
    arr = arr.map(value => a*value);
    arr.forEach(a => console.log(a));
    console.log(a*(+b));
}