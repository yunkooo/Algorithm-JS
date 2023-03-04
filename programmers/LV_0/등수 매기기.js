function solution(score) {
  const obj = {};
  const arr = score
    .map((val) => (val[0] + val[1]) / 2)
    .sort((a, b) => b - a)
    .forEach((val, idx) => {
      if (obj.hasOwnProperty(val)) return;
      else obj[val] = idx + 1;
    });
  return score.map((val) => obj[(val[0] + val[1]) / 2]);
}
