function solution(array, n) {
  let arr = [0, 0, 1000];
  let [num, minIdx, cha] = arr;
  array
    .sort((a, b) => a - b)
    .filter((val, idx) => {
      if (Math.abs(val - n) < cha) {
        num = val;
        minIdx = idx;
        cha = Math.abs(val - n);
      }
    });
  return num;
}
