const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split('');

// 내가 작성 한 코드는 fail
// time = 0;
// for(let i=0; i<input.length; i++){
//     if(input[i].charCodeAt()<68) time+=3;
//     else if(input[i].charCodeAt()<71) time+=4;
//     else if(input[i].charCodeAt()<74) time+=5;
//     else if(input[i].charCodeAt()<77) time+=6;
//     else if(input[i].charCodeAt()<80) time+=7;
//     else if(input[i].charCodeAt()<83) time+=8;
//     else if(input[i].charCodeAt()<86) time+=9;
//     else if(input[i].charCodeAt()<91) time+=10;

// }
// console.log(time);

//구글링을 통해 객체를 이용하는 방법을 알게되었다.

const numbers = {
    3: "ABC",
    4: "DEF",
    5: "GHI",
    6: "JKL",
    7: "MNO",
    8: "PQRS",
    9: "TUV",
    10: "WXYZ"
};

let time = 0;

for(let i=0; i<input.length; i++){
    for(let j=3; j<=10; j++){
        if(numbers[j].includes(input[i])){
            time +=j;
        }
    }
}
console.log(time);