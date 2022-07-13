const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('/n');
input = +input[0];

sol(input);

function sol(n){
    if(n%4===0 && n%100 !==0 || n%400==0) console.log(1);
    else console.log(0);
}


