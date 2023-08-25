function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const ingQueue = [];

  while (truck_weights.length > 0 || ingQueue.length > 0) {
    ++answer;
    if (answer === ingQueue[0]?.time) ingQueue.shift();
    const ingQueueSum = ingQueue.reduce((acc, cur) => acc + cur.weight, 0);
    if (weight - ingQueueSum >= truck_weights[0]) {
      const elementWeight = truck_weights.shift();
      ingQueue.push({ weight: elementWeight, time: answer + bridge_length });
    }
  }
  return answer;
}
