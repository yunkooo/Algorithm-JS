const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
let A=+input[0], B=+input[1];

sol(A,B);

function sol(a,b){
    if(a>0 && b>0) console.log(1);
    else if(a>0 && b<0) console.log(4);
    else if(a<0 && b>0) console.log(2);
    else if(a<0 && b<0) console.log(3);
}


// fs모듈 런타임 에러
// readline을 사용해야한다.