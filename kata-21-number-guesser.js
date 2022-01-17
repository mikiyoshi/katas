// rundom number setting as answer
const answer = Math.ceil(Math.random() * 100);
// user's answer
let guess;
// user's answer save it
let attemptsArr = [];

let prompt = require("prompt-sync")({sigint: true});

while (guess !== answer) {

  console.log('\nGuess a number:');
  guess = Number(prompt('> '));

  if (attemptsArr.includes(guess)) {
    console.log('Already Guessed!');
    continue;
    
  } else if (!isNaN(guess)) {
    attemptsArr.push(guess);
  }

  if (guess > answer) {
    console.log('Too High!');
  
  } else if (guess < answer) {
    console.log('Too Low!');
  
  } else if (isNaN(guess)) {
    console.log('Not a number! Try again!');

  } else {
    console.log('You got it! You took ' + attemptsArr.length + ' attempts!\n');
  }

}