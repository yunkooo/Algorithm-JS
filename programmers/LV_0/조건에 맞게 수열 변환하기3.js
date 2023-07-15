function solution(arr, k) {
  return k % 2 === 0 ? arr.map((val) => val + k) : arr.map((val) => val * k);
}
