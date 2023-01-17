function solution(array) {
  let answer = Math.max(...array);
  let idx = array.indexOf(answer);
  return [answer, idx];
}
