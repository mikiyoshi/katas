const makeCase = function(input, letter) {
  // Put your solution here
  // console.log();
  // console.log(input);
  // console.log(letter);
  let text = [];
  let i = 0;
  while (i < input.length) {
    if (letter === 'camel') {
      if (input[i] === ' ') {
        text.push();
        i++;
        text.push(input[i].toUpperCase());
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'pascal') {
      if (i === 0) {
        text.push(input[0].toUpperCase());
        i++
      } else if (input[i] === ' ') {
        text.push();
        i++;
        text.push(input[i].toUpperCase());
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'snake') {
      if (input[i] === ' ') {
        text.push('_');
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'kebab') {
      if (input[i] === ' ') {
        text.push('-');
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'title') {
      if (i === 0) {
        text.push(input[0].toUpperCase());
        i++
      } else if (input[i] === ' ') {
        text.push(' ');
        i++;
        text.push(input[i].toUpperCase());
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'vowel') {
      if (input[i] === 'a' || input[i] === 'i' || input[i] === 'u' || input[i] === 'e' || input[i] === 'o') {
        text.push(input[i].toUpperCase());
        i++;
      } else {
        text.push(input[i]);
        i++;
      }
    } else if (letter === 'consonant') {
      if (input[i] === 'a' || input[i] === 'i' || input[i] === 'u' || input[i] === 'e' || input[i] === 'o') {
        text.push(input[i]);
        i++;
      } else {
        text.push(input[i].toUpperCase());
        i++;
      }
    } else if (letter === 'upper', 'snake') {
      if (input[i] === ' ') {
        text.push('_');
        i++;
      } else {
        text.push(input[i].toUpperCase());
        i++;
      }
    }
  };
  text = text.join('');
  return text;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
