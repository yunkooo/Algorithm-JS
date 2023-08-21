function solution(myString, pat) {
  const arrChange = myString
    .split('')
    .map((val) => {
      if (val === 'A') return 'B';
      else return 'A';
    })
    .join('');
  return arrChange.includes(pat) ? 1 : 0;
}
