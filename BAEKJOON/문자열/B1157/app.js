const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath,'utf-8').trim();

input = input.toLowerCase();
let set = new Set(input);
let arr = Array.from(set)
let result = arr.map(val => input.split(val).length-1);

let max = Math.max(...result);
let count =0;

result.filter(val => {if(val == max) count++})


if(count >=2) console.log('?');
else console.log(arr[result.indexOf(max)].toUpperCase());