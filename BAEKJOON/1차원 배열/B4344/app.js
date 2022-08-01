const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').split('\n');
let testCase = Number(input.shift());
let arr = input.map(val => val.split(' '));
for(let i=0; i<arr.length; i++){
    sol(arr[i]);
}

function sol(arr){
    let n = Number(arr[0]);
    let over=0;
    let sum=0;
    let average;
    for(let j=1; j<arr.length; j++){
        sum+=Number(arr[j]);
    }
    average = sum/n
    for(let k=1; k<arr.length; k++){
        if(average<arr[k]) over++;
    }

    console.log((over/n*100).toFixed(3)+'%');
}


// 백준은 나의 풀이를 싫어한다.