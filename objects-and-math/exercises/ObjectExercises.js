let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11, 
   age: 6
   
};

let dog = {
   name: "Leroy", 
   species: "Beagle",
   mass: 14,
   age: 5
   
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1

};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
dog.astronautID = 4;
waterBear.astronautID = 5;

// superChimpOne.move = function(){
//    return Math.round(Math.random()*10)
// };
// salamander.move = function(){
//    return Math.round(Math.random()*10)
// };
// superChimpTwo.move = function(){
//    return Math.round(Math.random()*10)
// };
// dog.move = function(){
//    return Math.round(Math.random()*10)
// };
// waterBear.move = function(){
//    return Math.round(Math.random()*10)
// };


// Create an array to hold the animal objects.

let crew = [
   superChimpOne, 
   salamander, 
   superChimpTwo, 
   dog,
    waterBear];


// Print out the relevant information about each animal.
for(let i = 0; i < crew.length; i++){
   console.log(`${crew[i].name}, ${crew[i].species}, ${crew[i].mass}, ${crew[i].age}, ${crew[i].astronautID}`);
}
// Start an animal race!

for(let i = 0; i < crew.length; i++){
   crew[i].move = function(){
      return Math.round(Math.random()*10)
   };
}

let crewReports = function(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
};

crewReports(dog);

let fitnessTest = function(participants){
 let results = [];
 for (let i = 0; i < participants.length; i++){
     let stepCount = 0;
     let moves = 0;
     while(stepCount < 20){
     stepCount += participants[i].move();
     moves++;
     }
     results.push(`${participants[i].name} took ${moves} turns to take 20 steps.`);
 }
 return results;
}
   

console.log(fitnessTest(crew));