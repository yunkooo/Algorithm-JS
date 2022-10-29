function solution(x) {
    var answer = true;
    
    let str = String(x);
    str = str.split("");
    let arr = str.map(a => Number(a));
    let sum = arr.reduce((acc, cur) => acc+cur);
    if(x%sum !== 0) answer = false;
    
    
    return answer;
    
}

// 문자에 + 연산자를 붙히면 타입 숫자가 된다.