function solution(n) {
  const arr = Array(n + 1)
    .fill(0)
    .map((n, i) => i)
    .filter((val, i) => i % 2 != 0);
  return arr;
}
