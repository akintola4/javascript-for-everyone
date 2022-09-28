//The .test() method takes the regex, applies it to a string 
//(which is placed inside the parentheses), and returns true or false 
//if your pattern finds something or not.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // using the test method will check for hello in myString

//it will return true or false
