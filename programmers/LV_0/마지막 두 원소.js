function solution(num_list) {
  const arr = [...num_list];
  const one = arr.pop();
  const two = arr.pop();
  if (one > two) num_list.push(one - two);
  else num_list.push(one * 2);
  return num_list;
}
