function solution(binomial) {
  const [one, two, three] = binomial.split(' ');

  if (two === '+') return parseInt(one) + parseInt(three);
  else if (two === '-') return parseInt(one) - parseInt(three);
  else return parseInt(one) * parseInt(three);
}
