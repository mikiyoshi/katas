const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  // console.log(bakeryA);
  // console.log(bakeryB);
  // console.log(recipes);
    // console.log(recipes[i].ingredients);
  for (let i = 0; i < recipes.length; i++) {
      // console.log(bakery[n]);
      // console.log(recipes[i].ingredients[0]);
    for (let a = 0; a < bakeryA.length; a++) {
      for (let b = 0; b < bakeryB.length; b++) {
        if (recipes[i].ingredients[0] === bakeryA[a] || recipes[i].ingredients[0] === bakeryB[b]) {
        // console.log(recipes[i].name);
          if (recipes[i].ingredients[1] === bakeryB[b] || recipes[i].ingredients[1] === bakeryA[a]) {
            // console.log(recipes[i].name);
            // console.log(bakery[n]);
            return recipes[i].name;
          }
        }
      }
    }
  }
  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));