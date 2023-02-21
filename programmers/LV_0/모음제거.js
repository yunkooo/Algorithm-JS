function solution(my_string) {
  return my_string
    .split('')
    .filter(
      (val) =>
        val !== 'a' && val !== 'e' && val !== 'i' && val !== 'o' && val !== 'u'
    )
    .join('');
}
