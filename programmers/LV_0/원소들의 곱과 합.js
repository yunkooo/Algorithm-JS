function solution(num_list) {
  let answer = num_list.reduce(
    (acc, cur) => {
      return [acc[0] * cur, acc[1] + cur];
    },
    [1, 0]
  );
  return answer[0] < answer[1] * answer[1] ? 1 : 0;
}
