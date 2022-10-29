function solution(a, b) {
    var answer = 0;
    if(a > b) {
        for(let i=b; i<a+1; i++){
            answer+=i;
        }
    }else if(b > a){
        for(let j=a; j<b+1; j++){
            answer +=j;
        }
    }else if(a==b) answer =a;
    
    return answer;
}

//가우스의 재림 이란것이 존재한다.
// 양끝의 합 X 갯수? 라고 생각된다.
// (a+b)*(Math.abs(b-a)+1)/2;