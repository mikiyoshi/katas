
const generateBoard = function(whiteQueen, blackQueen) {
  // console.log();
  // console.log(whiteQueen);
  // console.log(blackQueen);
  let bord = [];
  let square = [];
  let wQueen = [];
  let bQueen = [];
  // square.push(2);
  // square.push(3);
  // square.push(4);
  // bord.push(square);
  // square.push(5);
  // square.push(6);
  // square.push(7);
  // bord.push(square);
  for (let i = 0; i < 8; i++) {
    square.push(0);
    bord.push(square);
  }
  // console.log(bord);
  for (let y = 0; y < 8; y++) {
    // square.push(y);
    for (let x = 0; x < 8; x++) {
      // console.log(x);
      // square[x] = square.push(0);
      // bord[x][y] = bord.push(square);
      if (whiteQueen[0] === y) {
        if (whiteQueen[1] === x) {
          wQueen.push(1);
        } else {
          wQueen.push(0);
        }
        bord[y] = wQueen;
      } else if (blackQueen[0] === y) {
        if (blackQueen[1] === x) {
          bQueen.push(1);
        } else {
          bQueen.push(0);
        }
        bord[y] = bQueen;
      }
    }
    // bord.push(square);
  }
  // let x = whiteQueen[0];
  // let y = whiteQueen[1];
  // bord[x][y] = 1;
  // bord[5][0] = 1;
  // bord[0] = 1;
  // console.log(queen);

  // console.log(whiteQueen);
  // console.log(bord);
  return bord;
  // console.log(bord[1][3]);
}








function queenThreat(bord) {
  
  let queensPosition = [];

  // find the queens
  for (let i = 0; i < 8; i++) {

    for (let j = 0; j < 8; j++) {
      if (bord[i][j] === 1) {
        queensPosition.push([i, j]);
      }
    }

  }
  console.log(queensPosition);
  // determine threat
  if (queensPosition[0][0] === queensPosition[1][0] || queensPosition[0][1] === queensPosition[1][1]) {
    return true;

  } else if (Math.abs(queensPosition[0][0] - queensPosition[1][0]) === Math.abs(queensPosition[0][1] - queensPosition[1][1])) {
    console.log(Math.abs(queensPosition[0][0] - queensPosition[1][0]));
    console.log(Math.abs(queensPosition[0][1] - queensPosition[1][1]));
    return true;

  } else {
    return false;
  }
}
// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
