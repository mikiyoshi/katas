const multiplicationTable = function(maxValue) {
  // Your code here
  // console.log(maxValue);
  let col = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let n = 0; n < maxValue; n++) {
      col += i + (n * i) + ' ';
    }
    col += '\n';
  }
  // console.log(col);
  return col;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
