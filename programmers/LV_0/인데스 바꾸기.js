function solution(my_string, num1, num2) {
  const arr = my_string.split('');
  let k = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = k;
  return arr.join('');
}
