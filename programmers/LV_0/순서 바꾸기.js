function solution(num_list, n) {
  let arrCut = num_list.splice(n);

  return [...arrCut, ...num_list];
}
