function solution(my_string) {
  let str = my_string.toLowerCase().split('').sort().join('');
  return str;
}
