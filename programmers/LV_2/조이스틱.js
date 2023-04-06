function solution(name) {
  let answer = 0;
  let min = name.length - 1;

  name.split('').forEach((word, idx) => {
    answer += Math.min(word.charCodeAt() - 65, 91 - word.charCodeAt());

    let nextIdx = idx + 1;
    while (nextIdx < name.length && name[nextIdx] === 'A') {
      nextIdx++;
    }
    min = Math.min(
      min,
      idx * 2 + name.length - nextIdx,
      i + 2 * (name.length - idx)
    );
  });
  return answer + min;
}
