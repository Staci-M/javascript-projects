const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let cutStr = str.slice(0,3);
let newStr = str.substring(3, str.length).concat(str.slice(0,3));
console.log(cutStr);
console.log(newStr);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is: ${str}\nThe original cut string is: ${cutStr}\nThe original modified string is: ${newStr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("How many letters would you like relocated? ");
let userCutStr = str.slice(0, Number(userInput));
let userNewStr = str.substring(Number(userInput), str.length).concat(str.slice(0,Number(userInput)));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userInput > str.length){
userCutStr = str.slice(0,3);
userNewStr = str.substring(3, 10).concat(str.slice(0,3));
console.log(`Sorry, your input: ${userInput}, was longer than than the word's character length...3 characters were removed from the original string and placed them at the end. Here is your modified word: ${userNewStr}`);
} else{
    console.log(`I've removed ${userInput} characters from the original string and placed them at the end. Here is your modified word: ${userNewStr}`);
    
}


