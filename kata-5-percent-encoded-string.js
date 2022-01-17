const urlEncode = function(text) {
  // Put your solution here
  // console.log(text);
  let letter = [];
  for (let i = 0; i < text.length; i++) {
    // console.log(text[i]);
    // console.log(text[i]);
    if (text[i] === " ") {
      letter[i] = "%20";
    } else {
      letter[i] = text[i];
    }
    // letter = text[i];
  }
  if (letter[0] === "%20" || letter[(letter.length - 1)] === "%20") {
    letter.pop("%20");
    letter.shift("%20");
  }
  // console.log(letter);
  console.log(letter.join(''));
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
