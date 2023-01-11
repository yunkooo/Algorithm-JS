function solution(n) {
  let answer = "" + n;

  answer = answer
    .split("")
    .map((val) => Number(val))
    .reduce((acc, cur) => acc + cur);
  return answer;
}
