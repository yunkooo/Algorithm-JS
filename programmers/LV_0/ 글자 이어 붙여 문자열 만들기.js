function solution(my_string, index_list) {
  let answer = '';
  index_list.forEach((val) => (answer += my_string[val]));
  return answer;
}
