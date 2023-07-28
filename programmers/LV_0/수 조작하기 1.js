function solution(n, control) {
  let answer = n;
  control.split('').forEach((val) => {
    if (val === 'w') answer = answer + 1;
    else if (val === 's') answer = answer - 1;
    else if (val === 'd') answer = answer + 10;
    else if (val === 'a') answer = answer - 10;
  });
  return answer;
}
