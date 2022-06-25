function solution(phone_number) {
    var answer = '';
    let arr = phone_number.split("");
    let _arr = arr.splice(0,arr.length-4).map(a => "*").join("");
    let __arr = arr.slice(arr.length-4,arr.length).join("");
    answer = _arr + __arr;

    return answer;
}

//문자열 또한 splice(), slice() 함수를 이용 가능하다.
// 스프레드 연산자 중요