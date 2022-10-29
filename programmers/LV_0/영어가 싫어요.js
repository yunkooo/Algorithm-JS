function solution(numbers) {
    var answer = [];
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let str = numbers.split('').reduce((acc,cur) => {
        acc = acc + cur
        arr.forEach((val,idx) => {
            if(acc === val)  {
                answer.push(idx)
                acc = '';
                return acc;
            }
        })
        return acc
    })
    return parseInt(answer.join(''));
}
