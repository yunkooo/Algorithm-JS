function solution(money) {
  const americano = 5500;
  const count = Math.floor(money / americano);
  return [count, money - americano * count];
}
