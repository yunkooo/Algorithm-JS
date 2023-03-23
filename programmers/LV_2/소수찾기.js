function solution(numbers) {
  const nums = numbers.split('');
  const set = new Set();
  dfs(set, nums, '');
  return set.size;
}

const isPrime = (n) => {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const dfs = (set, arr, fixed) => {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newFixed = fixed + arr[i];
      let copyArr = [...arr];
      copyArr.splice(i, 1);

      if (isPrime(parseInt(newFixed))) {
        set.add(parseInt(newFixed));
      }
      dfs(set, copyArr, newFixed);
    }
  }
};
