function solution(n) {
  var answer = 1;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) answer += 1;
  }
  return answer;
}
