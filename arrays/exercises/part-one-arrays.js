//Create an array that can hold 4 items name practiceFile.
let practiceFile = ['', '', '', '']

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile[0] = 'hello';
console.log(practiceFile);
practiceFile[1] = '42';
console.log(practiceFile);

//Use a SetValue to add the items "false", and "-4.6" to the array.  Print the array to confirm the changes.
practiceFile.splice(2,4, 'false', '-4.6');
console.log(practiceFile);
