const sumLargestNumbers = function (data) {
  // Put your solution here
  // console.log(data);
  const list = data.sort(function (a, b) {
    return a - b;
  });
  // console.log(list);
  let first = list.length - 1;
  let second = list.length - 2;
  // console.log(list[first] + list[second]);
  return list[first] + list[second];
  // for (let i = 0; i < list.length; i++) {
  //   data[i] = -1;
  // }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// sample without sort

// const sumLargestNumbers = function(data) {
//   let largest = data[0];
//   let secondLargest = data[1];

//   if(largest > secondLargest) {
//     largest = data[0];
//     secondLargest = data[1];
//   } else {
//     secondLargest = data[0];
//     largest = data[1];
//   }

//   for(let i = 2; i < data.length; i++){
//     if(data[i] > largest) {
//       secondLargest = largest;
//       largest = data[i];
//     }
//   }
//   return largest + secondLargest;
// }

// console.log(sumLargestNumbers([1, 2, 3]));
