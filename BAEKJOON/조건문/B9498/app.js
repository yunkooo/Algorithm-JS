const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = +input[0];

sol(input);

function sol(n){
    if(n>=90) console.log("A");
    else if(n>=80) console.log("B");
    else if(n>=70) console.log("C");
    else if(n>=60) console.log("D");
    else console.log("F")
}