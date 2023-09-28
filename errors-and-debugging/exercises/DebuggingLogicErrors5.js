// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.
const input = require('readline-sync');

let launchReady = false;
let fuelReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

//console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

//console.log(`launchReady = ${launchReady} and fuelReady = ${fuelReady}`);

if(launchReady && fuelReady){
   console.log('9, 8, 7, 6, 5, 4, 3, 2, 1... LIFTOFF!');
}else{
   console.log('Launch Scrubbed');
}

myName = input.question('What is your name');