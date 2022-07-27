const { SlowBuffer } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
let time = input[0].split(' ');
let plus = Number(input[1]);
let hour = Number(time[0]), minute=Number(time[1]);

sol(hour, minute, plus);

function sol(h, m, p){
    m += p;
    if(m>=60) {
        h += Math.floor(m/60);
        m = m%60;
    }
    if (h>=24) h-=24;

    console.log(`${h} ${m}`);
}