const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = input[0].split(' ').map(a => Number(a));
let A=input[0], B=input[1];
sol(A,B);


function sol(a,b){
    if(a>b) console.log(">")
    else if (a<b) console.log("<")
    else console.log("==")
}