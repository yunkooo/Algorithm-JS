function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i];

    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      k--;
      stack.pop();
    }
    stack.push(num);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}
