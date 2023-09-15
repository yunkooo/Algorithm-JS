function solution(my_string, is_suffix) {
  const answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (my_string.substring(i) === is_suffix) return 1;
  }
  return answer;
}
