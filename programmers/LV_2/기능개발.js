function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((val, idx) =>
    Math.ceil((100 - val) / speeds[idx])
  );
  console.log(days);

  let max = days[0];
  let work = 0;

  for (let i = 0; i < days.length; i++) {
    if (max >= days[i]) {
      work++;
    } else {
      answer.push(work);
      work = 1;
      max = days[i];
    }
  }
  answer.push(work);
  return answer;
}
