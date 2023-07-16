function solution(num_list, n) {
  return num_list.filter((val, idx) => idx === 0 || idx % n === 0);
}
