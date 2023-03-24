function solution(numbers) {
  var answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) continue;
      if (answer < numbers[i] * numbers[j]) answer = numbers[i] * numbers[j];
    }
  }
  return answer;
}
