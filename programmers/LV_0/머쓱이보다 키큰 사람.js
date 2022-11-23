function solution(array, height) {
    var answer = 0;
    return array.filter(val => {
        if(val > height) return val
    }).length;
}