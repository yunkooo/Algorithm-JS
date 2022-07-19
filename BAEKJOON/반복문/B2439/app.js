const fs = require('fs');
const filePath= process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
let A = Number(input[0]);

sol(A);

function sol(n){
    s='*';
    k=' ';
    for(let i=1; i<=n; i++) console.log(`${k.repeat(n-i)}${s.repeat(i)}`);
}