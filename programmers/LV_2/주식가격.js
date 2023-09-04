function solution(prices) {
  return prices.map((val, idx, arr) => {
    let number = 0;
    for (let i = idx + 1; i < arr.length; i++) {
      if (val <= arr[i]) number++;
      else if (idx !== arr.length - 1) return 1;
    }
    return number;
  });
}
