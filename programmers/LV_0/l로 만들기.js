function solution(myString) {
  const num = 'l'.charCodeAt();
  return myString
    .split('')
    .map((val) => {
      if (val.charCodeAt() < num) return 'l';
      else return val;
    })
    .join('');
}
