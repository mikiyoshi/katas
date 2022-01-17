const organizeInstructors = function(instructors) {
  // Put your solution here
  // console.log(instructors);
  let result = {};
  let resultA = [];
  let resultB = [];
  let resultC = [];
  for (let i = 0; i < instructors.length; i++) {
    // console.log(instructors[i]);
    if (instructors[i].course === 'iOS') {
      resultA.push(instructors[i].name);
      result['iOS'] = resultA;
    } else if (instructors[i].course === 'Web') {
      resultB.push(instructors[i].name);
      result['Web'] = resultB;
    } else if (instructors[i].course === 'Blockchain') {
      resultC.push(instructors[i].name);
      result['Blockchain'] = resultC;
    }
  }
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
