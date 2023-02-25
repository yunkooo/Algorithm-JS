function solution(my_string) {
  var answer = 0;
  let = arr = [];
  my_string.split(' ').filter((val) => {
    if (val === '+' || val === '-') {
      arr = [...arr, val];
      return;
    } else {
      if (!arr.length) answer += +val;
      else {
        let x = arr.pop();
        x === '+'
          ? (answer = answer + Number(val))
          : (answer = answer - Number(val));
      }
    }
  });
  return answer;
}
