function solution(numbers, direction) {
  let answer = [];
  const N = numbers.length;
  if (direction === 'right')
    answer = [numbers[N - 1], ...numbers.slice(0, N - 1)];
  else answer = [...numbers.slice(1), numbers[0]];
  return answer;
}
