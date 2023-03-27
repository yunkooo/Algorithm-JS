function solution(B, Y) {
  const sum = B + Y;

  for (let h = 3; h <= B; h++) {
    if (sum % h === 0) {
      let w = sum / h;

      if ((h - 2) * (w - 2) === Y) {
        return [w, h];
      }
    }
  }
}
