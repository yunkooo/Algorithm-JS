const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split(' ');

let h = Number(input[0]);
let m = Number(input[1]);
m-=45;
if(m<0) {
    m+=60;
    --h;
    if(h<0){
        h+=24;
    }
}
console.log(`${h} ${m}`);