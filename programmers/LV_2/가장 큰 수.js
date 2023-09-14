function solution(numbers) {
  let answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

// function solution(numbers) {
//   let answer = [...numbers];
//   const length = answer.length;
//   let temp;

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length - 1 - i; j++) {
//       if (compare(answer[j], answer[j + 1]) === -1) {
//         temp = answer[j];
//         answer[j] = answer[j + 1];
//         answer[j + 1] = temp;
//       }
//     }
//   }
//   return answer.join('').toString();
// }

// function compare(a, b) {
//   const strA = a.toString().split('');
//   const strB = b.toString().split('');
//   let length = strA.length < strB.length ? strA.length : strB.length;
//   for (let k = 0; k < length; k++) {
//     if (parseInt(strA[k]) > parseInt(strB[k])) {
//       return 1;
//     } else if (parseInt(strA[k]) < parseInt(strB[k])) {
//       return -1;
//     } else continue;
//   }
//   if (strA.length < strB.length) return 1;
//   else if (strA.length > strB.length) return -1;
//   return 1;
// }

// console.log(compare(936, 93));

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));

// var bubbleSort = function(array) {
//     var length = array.length;
//     var i, j, temp;
//     for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
//       for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
//         if (array[j] > array[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
//           temp = array[j]; // 두 수를 서로 바꿔준다
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
//     return array;
//   };

//   bubbleSort([5,1,7,4,6,3,2,8]);

// function solution(numbers) {
//   let answer = getPermutations(numbers, numbers.length).sort(
//     (a, b) => parseInt(b) - parseInt(a)
//   );
//   return answer[0];
// }

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);
//   // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     // 해당하는 fixed를 제외한 나머지 배열
//     const permutations = getPermutations(rest, selectNumber - 1);
//     // 나머지에 대해서 순열을 구한다.
//     const attached = permutations.map((el) => [fixed, ...el].join(''));
//     //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
//     results.push(...attached);
//     // 배열 spread syntax 로 모두다 push
//   });

//   return results; // 결과 담긴 results return
// };

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));
