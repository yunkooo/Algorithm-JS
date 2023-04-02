function solution(s) {
  const arr = ['A', 'E', 'I', 'O', 'U'];
  let wordPlus = '';
  const words = [];

  const dfs = (word, words) => {
    if (word.length < 5) {
      for (let i = 0; i < 5; i++) {
        let newWord = word + arr[i];
        words.push(newWord);
        dfs(newWord, words);
      }
    }
  };
  dfs(wordPlus, words);
  console.log(words.length);
  return words.indexOf(s) + 1;
}
