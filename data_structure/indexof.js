//indexOf(), that allows us to quickly and easily 
//check for the presence of an element on an array. indexOf() 
//takes an element as a parameter, and when called, 
//it returns the position, or index, of that element, 
//or -1 if the element does not exist on the array.

let usernames = ["fola", "tosin", "temi", "foster"]

//too check the array for the string "tosin"
//anything greater than 0 or eqaul too means the element exit in the array
console.log(usernames.indexOf("tosin"));

//if -1 it means it not in the array 
console.log(usernames.indexOf("drake"));

//we can also create a function to test it 

function quick(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true
    } else {
        return false
    }
}

console.log(quick(usernames, "fola"));