function solution(num_str) {
  return num_str.split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur));
}
