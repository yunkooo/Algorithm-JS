function solution(n) {
    var answer = 0;
    for(let i =2; i<=n; i++){
        let x = 0;    
        
        for(let j = 1; j<=i; j++){
            if(i%j == 0) x+=1;
        }
        if(x == 2) answer+=1;
    }
    return answer;
}

// 실패 시간초과