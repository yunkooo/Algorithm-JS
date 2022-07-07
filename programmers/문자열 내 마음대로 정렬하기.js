function solution(strings, n) {
    var answer = [];
    answer = strings.sort((x,y)=>{
        if(x[n] > y[n]) return 1;
        else if (x[n] < y[n]) return -1;
        else if (x[n] == y[n]) return (x > y) ? 1 : -1;
    })
    return answer;
}


// 다시 공부하기