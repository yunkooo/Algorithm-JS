function solution(keyinput, board) {
  var answer = [0, 0];
  let point1 = Math.floor(board[0] / 2);
  let point2 = Math.floor(board[1] / 2);
  keyinput.filter((val) => {
    if (val === 'left') {
      if (answer[0] <= -point1) return;
      else answer[0] -= 1;
    } else if (val === 'right') {
      if (answer[0] >= point1) return;
      else answer[0] += 1;
    } else if (val === 'up') {
      if (answer[1] >= point2) return;
      else answer[1] += 1;
    } else if (val === 'down') {
      if (answer[1] <= -point2) return;
      else answer[1] -= 1;
    }
  });
  return answer;
}
