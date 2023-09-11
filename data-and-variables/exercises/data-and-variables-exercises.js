// Declare and assign the variables below
let spaceShuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;



// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(distanceToMoonKm);
console.log(milesPerKm);

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24


// Print the results of the space mission calculations below
console.log('The distance for the mission to Mars is ' + milesToMars + ' miles.');
console.log('The mission to Mars will take ' + hoursToMars + ' hours.');
console.log('It will take ' + daysToMars + ' days to reach Mars');
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon * milesPerKm;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log('It will take ' + daysToMoon + ' days to reach the Moon');
