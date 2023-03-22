function solution(sizes) {
  let m, n;
  const arr = sizes
    .map((val) => val.sort((a, b) => b - a))
    .sort((a, b) => b[0] - a[0]);
  m = arr[0][0];
  const _arr = arr.sort((a, b) => b[1] - a[1]);
  n = _arr[0][1];
  return m * n;
}
