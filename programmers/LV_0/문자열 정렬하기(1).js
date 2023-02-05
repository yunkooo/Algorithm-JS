function solution(my_string) {
  var answer = my_string
    .split("")
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))
    .sort((a, b) => a - b);
  return answer;
}
