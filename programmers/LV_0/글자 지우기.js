function solution(my_string, indices) {
  const arr = my_string.split('');
  indices.forEach((val) => (arr[val] = 0));

  return arr.filter((val) => val !== 0).join('');
}
