function solution(i, j, k) {
  var answer = Array(j - i + 1)
    .fill(0)
    .map((val, idx) => val + idx + i)
    .join("")
    .split(k);
  return answer.length - 1;
}
