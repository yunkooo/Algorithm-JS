function solution(s) {
  const arr = s.split('');
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push('item');
    } else {
      const p = stack.pop();
      if (p !== 'item') return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
