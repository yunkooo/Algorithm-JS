function solution(clothes) {
  let answer = 1;
  const obj = {};
  clothes.forEach(([val, name]) =>
    obj.hasOwnProperty(name) ? (obj[name] = obj[name] + 1) : (obj[name] = 1)
  );
  console.log(obj);
  for (const [key, value] of Object.entries(obj)) {
    answer = answer * (value + 1);
  }
  return answer - 1;
}
