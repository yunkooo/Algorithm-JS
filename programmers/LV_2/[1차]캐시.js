function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((city) => city.toLowerCase());
  const queue = [];

  function checkCity(city) {
    if (queue.length < cacheSize) {
      const hasIndex = queue.findIndex((val) => val == city);
      if (hasIndex !== -1) {
        queue.splice(hasIndex, 1);
        queue.push(city);
        answer += 1;
      } else {
        queue.push(city);
        answer += 5;
      }
    } else {
      if (cacheSize === 0) {
        answer += 5;
        return;
      }
      const hasIndex = queue.findIndex((val) => val == city);
      if (hasIndex !== -1) {
        queue.splice(hasIndex, 1);
        queue.push(city);
        answer += 1;
      } else {
        queue.shift();
        queue.push(city);
        answer += 5;
      }
    }
  }

  cities.forEach((city) => checkCity(city));
  console.log(answer);
  return answer;
}

solution(0, ['Jeju', 'Jeju', 'Jeju']);
