function solution(priorities, location) {
  let answer = 0;
  const arr = new Array(priorities.length).fill(0).map((val, idx) => idx);

  while (priorities.length !== 0) {
    let maxNumber = Math.max(...priorities);
    let number = priorities.shift();
    let valNumber = arr.shift();

    if (number < maxNumber) {
      priorities.push(number);
      arr.push(valNumber);
    } else {
      ++answer;
      if (valNumber === location) return answer;
    }
  }

  return answer;
}
