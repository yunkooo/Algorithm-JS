function solution(s) {
  var answer = 0;
  arr = s.split(' ');
  arr.filter((val, idx, arr) => {
    if (val === 'Z') answer -= +arr[idx - 1];
    else answer += +val;
  });
  return answer;
}
