function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const element = new Array(n).fill(0);
    element[i] = 1;
    answer.push(element);
  }
  return answer;
}
