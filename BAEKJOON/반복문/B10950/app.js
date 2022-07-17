const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
let n=input.shift();
let arr = input.map(a => a.split(' '));

for(let i=0; i<+n; i++){
    console.log(Number(arr[i][0])+Number(arr[i][1]));
}


// 3가지 경우 모두 출력은 맞게 나온다.
//틀린이유를 찾지못함

// 경우의수를 입력안했었음