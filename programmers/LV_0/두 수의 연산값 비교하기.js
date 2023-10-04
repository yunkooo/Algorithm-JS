function solution(a, b) {
  let plus = parseInt('' + a + b);
  let num = 2 * a * b;
  return plus > num ? plus : num;
}
