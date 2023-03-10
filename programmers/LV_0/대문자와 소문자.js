function solution(my_string) {
  const answer = my_string
    .split('')
    .map((val) => {
      if (val.charCodeAt() < 91) return val.toLowerCase();
      else return val.toUpperCase();
    })
    .join('');
  return answer;
}
