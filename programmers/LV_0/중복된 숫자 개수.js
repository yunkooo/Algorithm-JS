function solution(array, n) {
    let answer = 0;
    array.forEach(val => {
        if(val === n) answer++
    })
    return answer;
}