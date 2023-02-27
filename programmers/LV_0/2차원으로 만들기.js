function solution(num_list, n) {
  let answer = [];
  let arr;
  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, n * i + n));
  }
  return answer;
}
