function solution(n){
    var answer = 0;
    answer = (n+"").split('').reduce((acc,cur)=>  acc += +cur,0);


    return answer;
}