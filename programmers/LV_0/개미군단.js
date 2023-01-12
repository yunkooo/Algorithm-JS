function solution(hp) {
  var answer = 0;
  let j = 5;
  let b = 3;
  let i = 1;
  _j = Math.floor(hp / j);
  hp = hp % j;
  _b = Math.floor(hp / b);
  hp = hp % b;
  _i = hp / i;
  return _j + _b + _i;
}
