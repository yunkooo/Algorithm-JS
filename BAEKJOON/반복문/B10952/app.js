const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
    console.log(input[i].split(' ').map(val => +val).reduce((acc,cur)=> acc+cur));
}




//trim() 을 추가하니 성공했다.