//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let arr = ['Elocution', 21, 'Clean teeth', 100];


let trippledValue = function(value){
    if( typeof value === 'number'){
        value = value * 3;
        return value;
    } else if(typeof value === 'string'){
        return 'ARRR!';
    } else {
        return value;
    }

};

let trippledValueMapped = arr.map(trippledValue);

console.log(trippledValueMapped);

console.log(trippledValue(true));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let mappedArray = arr.map(function (value) {
    if (typeof value === 'number') {
        return value * 3;
    } else if (typeof value === 'string') {
        return 'ARRR!';
    } else {
        return value;
    }
});

console.log(mappedArray);
console.log(arr);

