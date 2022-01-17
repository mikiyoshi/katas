const camelCase = function(input) {
  // Your code here
  // console.log(input);
  let text = [];
  let i = 0;
  while (i < input.length) {
    // console.log(input[i]);
    if (input[i] === ' ') {
      text.push();
      i++;
      // console.log(input[i].toUpperCase());
      text.push(input[i].toUpperCase());
      i++;
    } else {
      text.push(input[i]);
      i++;
    }
    // console.log(input[i]);
  }
  // console.log(text);
  text = text.join('');
  return text;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
