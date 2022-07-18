const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = Number(input[0]);

sol(input);

function sol(n){
    for(let i=n; i>0; i--){
        console.log(i);
    }
}