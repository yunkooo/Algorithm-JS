function solution(order) {
  var answer = 0;
  answer += ('' + order).split('3').length - 1;
  answer += ('' + order).split('6').length - 1;
  answer += ('' + order).split('9').length - 1;
  return answer;
}
