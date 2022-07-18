const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = Number(input[0]);

console.log(sol(input));

function sol(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}