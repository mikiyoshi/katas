const repeatNumbers = function(data) {
  // Put your solution here
  // console.log(data);
  let repeat = [];
  // repeat = '1';
  // // console.log(repeat + repeat);
  // for (let a = 0; a < 3; a++) {
  //   repeat = repeat + repeat;
  //   console.log(repeat);
  // }
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    // newArray.push(data[i]);
    // console.log(data[i][1]);
    // console.log(data[i][(data[i].length -1)]);
    // repeat = data[i][0];
    // num = data[i][(data[i].length -1)]
    let line = '';
    for (let n = 0; n < data[i][1]; n++) {
      // repeat = data[i][0] + data[i][0];
      line += data[i][0];
      // repeat.push(data[i][0]);
      // if (n = (data[i][1] - 1)) {
      //   repeat.push(',');
      // }
      // console.log(data[i][n]);
      // console.log(repeat);
    }
    repeat.push(line);
  }
  // console.log(repeat);
  // repeat.join(',');
  // console.log(repeat);
  return repeat.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
