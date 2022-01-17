const instructorWithLongestName = function(instructors) {
  // Put your solution here
  // console.log(instructors[0].name);
  let longestName = instructors[0].name.length;
  let result = instructors[0];
  // console.log(longestName);
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length;
      result = instructors[i];
    }
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Jeremiah", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
