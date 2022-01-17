const calculateChange = function(total, cash) {
  // Your code here
  // console.log(total);
  // console.log(cash);
  let twentyDollar = '';
  let tenDollar = '';
  let fiveDollar = '';
  let twoDollar = '';
  let oneDollar = '';
  let quarter = '';
  let dime = '';
  let nickel = '';
  let penny = '';
  let result = {};
  let change = cash - total;
  // console.log(change);
  if (change > 2000) {
    twentyDollar = Math.floor(change / 2000);
    change = change % 2000;
    result['twentyDollar'] = twentyDollar;
  }
  // console.log(result);
  if (2000 > change && change > 1000) {
    tenDollar = Math.floor(change / 1000);
    change = change % 1000;
    result['tenDollar'] = tenDollar;
  }
  // console.log(result);
  if (1000 > change && change > 500) {
    fiveDollar = Math.floor(change / 500);
    change = change % 500;
    result['fiveDollar'] = fiveDollar;
  }
  // console.log(result);
  if (500 > change && change > 200) {
    twoDollar = Math.floor(change / 200);
    change = change % 200;
    result['twoDollar'] = twoDollar;
  }
  // console.log(result);
  if (200 > change && change > 100) {
    oneDollar = Math.floor(change / 100);
    change = change % 100;
    result['oneDollar'] = oneDollar;
  }
  // console.log(result);
  if (100 > change && change > 25) {
    quarter = Math.floor(change / 25);
    change = change % 25;
    result['quarter'] = quarter;
  }
  // console.log(result);
  if (25 > change && change > 10) {
    dime = Math.floor(change / 10);
    change = change % 10;
    result['dime'] = dime;
  }
  // console.log(result);
  if (10 > change && change > 5) {
    nickel = Math.floor(change / 5);
    change = change % 5;
    result['nickel'] = nickel;
  }
  // console.log(result);
  if (5 > change) {
    penny = change;
    change = change;
    result['penny'] = penny;
  }
  // console.log(result);
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// twentyDollar
// tenDollar 1000
// fiveDollar
// twoDollar
// oneDollar
// quarter
// dime
// nickel
// penny
// quarter (25¢)
// dime (10¢)
// nickel (5¢)
// penny (1¢)
