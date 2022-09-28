//we will be learning about the .match() method js
//it doesn't just find if the pattern is inside the string
//you can also extract it 

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;//pattern we looking for 
let result = extractStr.match(codingRegex); //using the method 

//in an event we want to macth pattern that occur one or more times
//Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

//You can use the + character to check if that is the case. Remember, 
//the character or pattern has to be present consecutively. 
//That is, the character has to repeat one after the other.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result2 = difficultSpelling.match(myRegex);