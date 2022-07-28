const { SlowBuffer } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
let A=Number(input[0]),B=Number(input[1]),C=Number(input[2]);

sol(A,B,C)

function sol(a,b,c){
    let mul = String(a*b*c)
    for(let i=0; i<=9; i++){
        let count=0;
        for(let j=0; j<mul.length; j++){
            if(mul[j]==i){
                count++
            }
        }
        console.log(count);
    }
}