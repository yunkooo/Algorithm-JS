function solution(arr) {
  let answer = [];
  arr.forEach((val) => {
    const plus = new Array(val).fill(val);
    answer = [...answer, ...plus];
  });
  return answer;
}
