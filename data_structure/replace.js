//replace(pattern, replacement)
//it was in this formate

let str = "Fola is a boy"

//also we you use the replace method store it into a new variable 
let newStr = str.replace("Fola", "Tola")
console.log(newStr)

// we can also use regular exp has the pattern 
let food = "Bread and water"
let newFood =food.replace(/bread/i, "apple")
console.log(newFood)

 let upper = food.toUpperCase()
console.log(upper)

//we can also use it with reqular experssion 
const test = 'Hello !@#$(Guy)%^* 123'; // Input testing
const test_replaced = test.replace(/[^a-z0-9]/gi, ''); 
console.log(test_replaced);