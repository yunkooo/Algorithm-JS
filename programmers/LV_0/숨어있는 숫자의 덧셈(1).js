function solution(my_string) {
  let answer = 0;
  my_string
    .split('')
    .forEach((val) => (Number(val) ? (answer += Number(val)) : null));
  return answer;
}
