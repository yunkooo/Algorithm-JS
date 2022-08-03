const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');

let n = input.shift()

for(let i=0; i<n; i++){
    let s = input[i].split(' ');
    let r = s[0];
    let t = s[1].split('');
    let result = t.map(val => val.repeat(r));
    result = result.join('');
    console.log(result);
}