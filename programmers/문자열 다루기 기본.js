function solution(s) {
    var answer = true;
    if(s.length !== 4 && s.length !== 6) return false;
    let arr = s.split('').map(a => isNaN(a));
    answer = arr.includes(true) ? false : true;
    return answer;
}