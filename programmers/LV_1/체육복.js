function solution(n, lost, reserve) {
  const newReserve = reserve
    .filter((val) => !lost.includes(val))
    .sort((a, b) => a - b);
  const newLost = lost
    .filter((val) => !reserve.includes(val))
    .sort((a, b) => a - b);
  let u = n - newLost.length;
  newLost.forEach((person) => {
    if (newReserve.includes(person - 1)) {
      u += 1;
      newReserve.splice(newReserve.indexOf(person - 1), 1);
      return;
    } else if (newReserve.includes(person + 1)) {
      u += 1;
      newReserve.splice(newReserve.indexOf(person + 1), 1);
      return;
    }
  });
  return u;
}

solution(10, [2, 4, 8, 1, 6], [1, 4, 3, 6, 5]);
