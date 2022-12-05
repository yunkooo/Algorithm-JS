function solution(money) {
  const americano = 5500;
  money / americano;
  return [
    Math.floor(money / americano),
    money / americano - Math.floor(money / americano),
  ];
}
