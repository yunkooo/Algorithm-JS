function solution(num) {
    var answer = 0;
    let count = 0;
    let val = true;
    
    if (num === 1) return answer =0;
    while(val){
        if(num === 1) return answer = count;
        else {
            if(num%2 == 0 ) {
                num /=2;
                count +=1
            }
            else if (num%2 ==1) {
                num = num*3+1;
                count+=1
            }                    
        }
        if( count > 500) return answer = -1;
    }
    return answer;
}

// 재귀함수를 이용하는 방법
// 삼항연산자를 이용하면 if문을 간결하게 작성가능하다.