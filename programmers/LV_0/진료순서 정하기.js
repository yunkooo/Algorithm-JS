function solution(e) {
    let arr = [...e]
    arr.sort((a,b) => b-a)
    let answer = e.map((val,idx) => arr.indexOf(val)+1)
    return answer;
}