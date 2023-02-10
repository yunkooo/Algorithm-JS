function solution(sides) {
  let Max = Math.max(...sides);
  let sum = sides.reduce((acc, cur) => acc + cur) - Max;
  return Max < sum ? 1 : 2;
}
