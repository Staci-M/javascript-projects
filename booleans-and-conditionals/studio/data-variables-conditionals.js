const input = require('readline-sync');

// Initialize Variables below
let spaceShuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 6;
let astronautStatus ='ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit  = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel =	'100%'
let weatherStatus = 'clear'
let preparedForLiftOff	= true
let statusMessage = '';
let line = '---------------------------------------------------------------';
let exitMessage = '';

console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(distanceToMoonKm);
console.log(milesPerKm);

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount > 7 ){
    astronautStatus = 'not ready';
} else {astronautStatus = 'ready';
}
// add logic below to verify all astronauts are ready
if(astronautStatus !== 'ready'){
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg > maximumMassLimit){
    preparedForLiftOff = false; 
} 

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius > maximumFuelTemp || fuelTempCelsius < minimumFuelTemp){
    preparedForLiftOff = false; 
} 

// add logic below to verify the fuel level is at 100%
if(fuelLevel !== '100%'){
    preparedForLiftOff = false; 
} 

// add logic below to verify the weather status is clear
if(weatherStatus !== 'clear'){
    preparedForLiftOff = false; 
} 

// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff === true){
statusMessage = "All systems are go. Initializing space shuttle launch sequence."
exitMessage = 'Have a safe trip astronauts!';
} else {
statusMessage = 'Shuttle is NOT cleared for launch.';
exitMessage = 'Not today, but your time will come astronauts!'

}


console.log(`${statusMessage}\n${line}\nDate: ${date}\nTime: ${time}\nAstronaut Count: ${astronautCount}\nCrew Mass: ${crewMassKg}\nFuel Mass: ${fuelMassKg}\nShuttle Mass: ${shuttleMassKg}\nTotal Mass: ${totalMassKg}\nFuel Temperature: ${fuelTempCelsius}\nWeather Status: ${weatherStatus}\n${line}\n${exitMessage}`);