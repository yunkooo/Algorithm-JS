function solution(box, n) {
  const result = box
    .map((val) => Math.floor(val / n))
    .reduce((acc, cur) => acc * cur);
  return result;
}
