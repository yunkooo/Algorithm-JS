function solution(num_list) {
  let a = 0,
    b = 0;
  num_list.forEach((val, idx) => {
    if (idx % 2 === 0) b += val;
    else a += val;
  });
  return a > b ? a : b;
}
