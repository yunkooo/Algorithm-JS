const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n').map(a => Number(a));
input = input.map(t => t%42);
let result = input.filter((n, idx) => input.indexOf(n) === idx);
console.log(result.length);

// let result =[];
// input.forEach(val => {
//     if(result.indexOf(val) === -1) result.push(val);
// })

// console.log(result.length);

//두가지 방법을 이용해도 fail
// why 내 코드만 틀렸다고 나올까...