function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((acc,cur) => acc+=cur);
    answer = sum/arr.length;
    return answer;
}