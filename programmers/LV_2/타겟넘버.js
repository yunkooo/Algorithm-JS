function solution(numbers, target) {
  let answer = 0;
  const len = numbers.length;

  const dfs = (num, val) => {
    console.log(val);
    if (num === len) {
      if (val === target) {
        answer += 1;
      }
    } else {
      dfs(num + 1, val + numbers[num]);
      dfs(num + 1, val - numbers[num]);
    }
  };
  dfs(0, 0);
  return answer;
}
