const blocksAway = function(directions) {
  // Put your solution here
  // console.log(directions.length);
  let x = 0;
  let y = 0;
  let car = {};
  // console.log(car[0]);
  for (let i = 0; i < directions.length; i++) {
      if (directions[i] === 'left') {
        // console.log('before ' + i);
        i++;
        // console.log('start ' + i);
        x = x - directions[i];
        i++;
        // console.log(i);
        if (directions[i] === 'left') {
          i++;
          y = y - directions[i];
          // console.log(i);
        } else if (directions[i] === 'right') {
          i++;
          y = y + directions[i];
          // console.log(i);
        }
      } else if (directions[i] === 'right') {
        // console.log('before ' + i);
        i++;
        // console.log('start ' + i);
        x = x + directions[i];
        i++;
        // console.log(i);
        if (directions[i] === 'left') {
          i++;
          y = y + directions[i];
          // console.log(i);
        } else {
          i++;
          y = y - directions[i];
          // console.log(i);
        }
      }
  }
  if (x >= 0) {
    car['east'] = Math.abs(x);
  } else {
    car['west'] = Math.abs(x);
  }
  if (y >= 0) {
    car['north'] = Math.abs(y);
  } else {
    car['south'] = Math.abs(y);
  }
  // console.log(car);
  return car;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
