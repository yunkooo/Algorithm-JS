function solution(n, computers) {
  var answer = 0;
  const visited = new Array(n).fill(false);
  const func = (i) => {
    visited[i] = true;
    computers[i].forEach((val, idx) => {
      if (!visited[idx] && val) func(idx);
    });
  };

  computers.forEach((val, idx) => {
    if (!visited[idx]) {
      func(idx);
      answer += 1;
    }
  });
  return answer;
}
