function solution(n, numlist) {
  var answer = numlist.filter((val) => {
    if (val % n == 0) return val;
  });
  return answer;
}
