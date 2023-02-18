function solution(age) {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  var answer = '';
  ('' + age).split('').filter((val) => (answer += arr[val]));
  return answer;
}
