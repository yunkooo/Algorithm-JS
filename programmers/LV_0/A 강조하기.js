function solution(myString) {
  return myString
    .split('')
    .map((val) => {
      if (val === 'a' || val === 'A') return 'A';
      else return val.toLowerCase();
    })
    .join('');
}
