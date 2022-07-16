const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = input[0];
let A=input;
sol(A);

function sol(n){
    for(let i=1; i<10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}