const input = require('readline-sync')

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
console.log(food);
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();


    
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCabinet = input.question('Please select a cabinet between 0 - 3: ');


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(Number(userCabinet) >= 0 && Number(userCabinet) <= 3 ){
    console.log(`The contents of the cabinet you selected are: ${cargoHold[userCabinet]}`)

} else { 
    console.log(`${userCabinet} is an invalid selection, pleae run the program again and select a cabinet NUMBER between 0 - 3. `);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

userItem = input.question('Please enter a cabinet item: ').toLowerCase();
if(Number(userCabinet) < 0 ||  Number(userCabinet > 3)){
    console.log(`${userCabinet} is an invalid selection, pleae run the program again and select a cabinet NUMBER between 0 - 3. Cabinet ${userCabinet} DOES NOT contain ${userItem}`);
} else if(cargoHold[userCabinet].includes(userItem)){
    console.log(`Cabinet ${cargoHold[userCabinet]} DOES contain ${userItem}`);
} else {
    console.log(`Cabinet ${cargoHold[userCabinet]} DOES NOT contain ${userItem}!`);
}


