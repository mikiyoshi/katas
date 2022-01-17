const urlDecode = function(text) {
  // Put your solution here
  // console.log(text);
  let space = [];
  let n = 0;
  while (n < text.length) {
    if (text[n] === '%') {
      space.push(' ');
      n++;
      n++;
      n++;
    } else {
      space.push(text[n]);
      n++;
    }
  }
  space = space.join('');
  let newArray = space.split('&');
  let name = [];
  for (let i = 0; i < newArray.length; i++) {
    name[i] = newArray[i].split('=');
  }
  // console.log(newArray);
  // console.log(name);
  let result = {};
  let x = 0;
  while (x < name.length) {
      result[name[x][0]] = name[x][1];
      x++;
  }
  // console.log(result);
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
