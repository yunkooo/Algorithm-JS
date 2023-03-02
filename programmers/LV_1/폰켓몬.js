function solution(nums) {
  let set = new Set(nums);
  const arr = [...set];
  return nums.length / 2 <= arr.length ? nums.length / 2 : arr.length;
}
