function solution(a, b) {
  const front = Number('' + a + b);
  const back = Number('' + b + a);

  return front > back ? front : back;
}
