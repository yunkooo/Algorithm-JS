function solution(before, after) {
  let _before = before.split('').sort();

  return after
    .split('')
    .sort()
    .every((val, idx) => val === _before[idx])
    ? 1
    : 0;
}
