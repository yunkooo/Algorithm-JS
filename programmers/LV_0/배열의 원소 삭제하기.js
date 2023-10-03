function solution(arr, delete_list) {
  for (let i = 0; i < delete_list.length; i++) {
    const idx = arr.indexOf(delete_list[i]);
    if (idx === -1) continue;
    arr.splice(idx, 1);
  }
  return arr;
}
