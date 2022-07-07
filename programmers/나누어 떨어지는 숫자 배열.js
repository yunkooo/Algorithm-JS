function solution(arr, divisor) {
    var answer = [];
    answer =arr.filter(a => {
        if(a%divisor == 0) return a;
    }).sort((a,b)=> a-b);
    if(answer.length == 0) return [-1];
    return answer;
}