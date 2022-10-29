function solution(x, n) {
    var answer = [];
    answer.push(x);
    let _x = x
    for(let i=1; i<n; i++){
        answer.push(_x+=(x*i));
        _x = x
    }
    return answer;
}