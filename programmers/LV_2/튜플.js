function solution(s) {
  var answer = [];
  const tupleList = getNumber(s);
  tupleList.forEach((num, idx, arr) => {
    if (idx === 0) answer.push(...num);
    else {
      answer.push(...num.filter((val) => !arr[idx - 1].includes(val)));
    }
  });
  console.log(answer.map((val) => Number(val)));
  return answer.map((val) => Number(val));
}

const getNumber = (s) => {
  const tupleList = [];
  let numberList = [];
  let number = '';
  const arr = s.split('').slice(1, -1);

  let isOpen = false;
  for (let num of arr) {
    if (num === '{') {
      isOpen = true;
    } else if (num === ',' && isOpen) {
      numberList.push(number);
      number = '';
    } else if (num === ',' && isOpen == false) {
      continue;
    } else if (num === '}') {
      numberList.push(number);
      tupleList.push(numberList);
      numberList = [];
      number = '';
      isOpen = false;
    } else {
      number += num;
    }
  }
  console.log(tupleList);
  return tupleList.sort((a, b) => a.length - b.length);
};
