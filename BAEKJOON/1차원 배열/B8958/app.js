// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// let input = fs.readFileSync(filePath,'utf-8').trim().split('\n');
// let n = input[0];

// for(let k=1; k<=n; k++){
//     sol(input[k]);
// }
// function sol (arr){
//     let sum=0;
//     let t= arr.split('X').map(a => a.length)
//     for(let i=0; i<t.length; i++){
//         for(let j=1; j<=t[i]; j++){
//             sum +=j;
//         }
//     }
//     console.log(sum);
// }

// 나의 출력도 답과 일치하지만 실패이다..
// 구글링해본 결과 모두 나와 풀이가 다르다..

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
let n = Number(input[0]);

for(let i=1; i<=n; i++){
    let sum=0;
    let count=0;
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] ==='O'){
            count++
        }else {
            count =0;
        }
        sum += count;
    }
    console.log(sum);
}

//split('\r) 을 제거하니 나의 코드 또한 맞았다고나온다...