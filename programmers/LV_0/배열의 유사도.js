function solution(s1, s2) {
    let answer = 0;
    s1.forEach((val,idx,arr) => {if(s2.includes(val)){answer++}})
    return answer;
}