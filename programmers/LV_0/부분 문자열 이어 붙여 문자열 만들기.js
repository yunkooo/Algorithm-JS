function solution(my_strings, parts) {
  var answer = [];

  for (let i = 0; i < parts.length; i++) {
    let str = my_strings[i];
    const [first, last] = parts[i];
    answer.push(str.split('').slice(first, last + 1));
  }
  return answer.join();
}
