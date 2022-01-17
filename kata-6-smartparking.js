const whereCanIPark = function (spots, vehicle) {
  // Code here!
  // console.log(spots);
  // console.log(vehicle);
  for (let i = 0; i < spots.length; i++) {
    // console.log(spots[i]);
    for (let n = 0; n < spots[i].length; n++) {
      // console.log(spots[i][n]);
      if (vehicle === 'regular') {
        if (spots[i][n] === 'R') {
          return [n, i];
        }
      } else if (vehicle === 'small') {
        if (spots[i][n] === 'R' || spots[i][n] === 'S') {
          return [n, i];
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[i][n] === 'R' || spots[i][n] === 'S' || spots[i][n] === 'M') {
          return [n, i];
        }
      }
    }
  }
  // 上記の条件以外
  return false
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
