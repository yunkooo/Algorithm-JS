function solution(s) {
  return s
    .split('')
    .sort()
    .filter((d, idx, arr) => d !== arr[idx + 1] && d !== arr[idx - 1])
    .join('');
}
