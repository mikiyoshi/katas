const numberOfVowels = function(data) {
  // Put your solution here
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (data[i] === "a" || data[i] === "i" || data[i] === "u" || data[i] === "e" || data[i] === "o") {
      num++
    }
  }
  return num;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
