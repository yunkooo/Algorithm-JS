const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = parseInt(input[0]);

function sol(N){
    if(N === 0) return 1;
    if(N === 1) return N;
    else return sol(N-1)*N;
}

console.log(sol(input));