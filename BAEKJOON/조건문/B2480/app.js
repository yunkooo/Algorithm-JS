const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath,'utf-8').split('\n');
input = input[0].split(' ');

sol(...input);

function sol(a,b,c){
    if(a==b && b==c) console.log(10000+a*1000);
    else if(a==b && b!=c) console.log(1000+a*100);
    else if(a==c && a!=b) console.log(1000+a*100);
    else if(b==c && b!=a) console.log(1000+b*100);
    else console.log(Math.max(...a,b,c)*100);
}