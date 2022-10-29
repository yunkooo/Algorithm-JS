process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    let result = "";
    for (let i=0; i<b; b++){
        for (let j=0; j<a; a++){
            result +="*";
        }
        console.log(result);
    }
    
});