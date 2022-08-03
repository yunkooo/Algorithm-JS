const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = input[0];
let result = [];
for(let i='a'.charCodeAt(); i<='z'.charCodeAt(); i++ ){
    result.push(input.indexOf(String.fromCharCode(i)));
}
result = result.join(' ');

console.log(result);