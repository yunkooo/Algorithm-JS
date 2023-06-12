function solution(num_list) {
  var answer = 0;
  const result = num_list.every((val, idx) => {
    if (val >= 0) return true;
    else {
      answer = idx;
      return false;
    }
  });
  return result ? -1 : answer;
}
