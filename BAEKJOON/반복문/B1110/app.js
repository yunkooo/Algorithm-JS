const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = Number(input[0]);
let count = 0;
let sum;
let newNum = input;
while(true){
    sum = Math.floor(newNum/10) + newNum%10;
    newNum = (newNum%10)*10 + sum%10;

    count++;
    if(newNum === input) break;
}
console.log(count);


