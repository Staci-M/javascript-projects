// let i = 0;
// while (i < 51) {
//   console.log(i);
//   i++;
// }

let numMeals = 5;

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


let mealAssembly =[protein, grains, veggies, beverages, desserts, numMeals]
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];



for(let mealVar = 0; mealVar < numMeals; mealVar++){
  let meal = []
  //for each mealVar, pantryVaR needs to loop through each pantry item
  for(let pantryVar = 0; pantryVar < pantry.length; pantryVar ++){
    meal.push(pantry[pantryVar][mealVar]);
    // console.log(`[${pantryVar}] [${mealVar}]`)
    // console.log (pantryVar)
    // console.log(meal);
  }
  meals.push(meal);
  console.log(meals);
}
  return meals;
  console.log(meals);
