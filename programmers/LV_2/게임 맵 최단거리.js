function solution(maps) {
  let answer = -1;

  const n = maps.length;
  const m = maps[0].length;
  const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const queue = [[0, 0, 1]];
  while (queue.length) {
    let [curX, curY, pos] = queue.shift();
    if (curX === n - 1 && curY === m - 1) return (answer = pos);
    for (let i = 0; i < ds.length; i++) {
      const [newX, newY] = [curX + ds[i][0], curY + ds[i][1]];
      if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
      if (!visited[newX][newY] && maps[newX][newY]) {
        visited[newX][newY] = 1;
        queue.push([newX, newY, pos + 1]);
      }
    }
  }
  return answer;
}
