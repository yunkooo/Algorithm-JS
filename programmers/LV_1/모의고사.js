function solution(answers) {
  const n = answers.length;

  const answer = [];
  const one = '12345'
    .repeat(Math.ceil(n / 5))
    .slice(0, n)
    .split('');
  const two = '21232425'
    .repeat(Math.ceil(n / 8))
    .slice(0, n)
    .split('');
  const three = '3311224455'
    .repeat(Math.ceil(n / 10))
    .slice(0, n)
    .split('');

  const one_result = answers.filter((val, idx) => val === +one[idx]).length;
  const two_result = answers.filter((val, idx) => val === +two[idx]).length;
  const three_result = answers.filter((val, idx) => val === +three[idx]).length;
  const max = Math.max(one_result, two_result, three_result);

  if (one_result === max) answer.push(1);
  if (two_result === max) answer.push(2);
  if (three_result === max) answer.push(3);

  return answer;
}
