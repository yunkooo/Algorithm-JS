function solution(numbers, k) {
    let n = 1;
    for( let i=0; i<k-1; i++){
        n +=2
        if(n>numbers.length) {
            n -=numbers.length
        }
    }
    return n;
}