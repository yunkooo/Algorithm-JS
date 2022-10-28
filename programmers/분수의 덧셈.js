function solution(denum1, num1, denum2, num2) {
    let answer = [];
    
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    
    const arr = denum < num ? new Array(num) : new Array(denum);
    _arr = arr.fill(0).map((val,idx) => {return idx+1})
    for(let i = 0 ; i< 3; i++){
            _arr.forEach(val => {
        if( denum%val == 0 && num%val == 0){
            denum = denum/val
            num = num/val
        }
    })
    }
    answer.push(denum);
    answer.push(num);
    console.log(answer)
    return answer;
    
}