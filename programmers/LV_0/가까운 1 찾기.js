function solution(arr, idx) {
  const arrSlice = arr.slice(idx);
  const num = arrSlice.indexOf(1);
  return num === -1 ? -1 : idx + num;
}
