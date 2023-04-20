function solution(people, limit) {
  let answer = 0;
  let len = people.length - 1;
  people.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    answer++;
    if (people[i] + people[len - 1] <= limit) len--;
  }

  return answer;
}
