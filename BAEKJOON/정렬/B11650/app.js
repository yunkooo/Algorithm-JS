const fs =require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const n = input.shift();

// let arr = 

let arr = input.map(val => val.split(' ').map(val => Number(val)));

arr.sort((a,b) => {
    if(a[0] > b[0]) return 1;
    else if(a[0] < b[0]) return -1;
    else if(a[0] == b[0]) return a[1] - b[1] ;
})



arr.forEach(val => console.log(`${val[0]} ${val[1]}`));