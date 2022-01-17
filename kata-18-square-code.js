const squareCode = function(message) {
  // Put your solution here
  // console.log(message);
  let result = [];
  let i = 0;
  while (i < message.length) {
    if (message[i] === ' ') {
      i++
    } else {
      result.push(message[i]);
      i++;
    }
  }
  // console.log(result);
  let goal = [];
  let num = Math.ceil(Math.sqrt(result.length));
  // console.log(num);
  for (let m = 0; m < num; m++) {
    for (let n = 0; n < result.length; n++) {
    // goal.push(result[0]);
    // console.log(n)
      if (n % num === m) {
        goal.push(result[n]);
          // console.log(result[n])
      }
    }
    goal.push(' ');
  }
  goal = goal.join('');
  // console.log(goal);
  return goal;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
