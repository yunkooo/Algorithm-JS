function solution(strArr) {
  var answer = [];
  strArr.forEach((val, idx) => {
    if (idx % 2 === 0) answer.push(val.toLowerCase());
    else answer.push(val.toUpperCase());
  });
  return answer;
}
