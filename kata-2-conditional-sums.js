const conditionalSum = function(values, condition) {
  // Your code here
  // console.log(values);
  // console.log(condition);
  let total = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0){
        total = total + values[i];
      }
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0){
        total = total + values[i];
      }
    }
  }
  return total;
  // console.log(total);
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
