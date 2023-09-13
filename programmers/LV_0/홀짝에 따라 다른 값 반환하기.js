function solution(n) {
  let answer = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; ) {
      answer += i * i;
      i += 2;
    }
    return answer;
  } else {
    for (let i = 1; i <= n; ) {
      answer += i;
      i += 2;
    }
    return answer;
  }
}
