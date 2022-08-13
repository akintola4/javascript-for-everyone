//working with arrays 
//when creating an array we use space brackets
//an array can store mutiple values 
//an array can have mutiple items
//an array can be written in two ways 

//first way
var cars = ["volvo", "BMW", "tesla", "lamborighin"]
//second way
var names = [
    "tope",
    "tosin",
    "kike",
    "anand"
];
//we can add a new value into our array 
//send the new value to the end of the array
names.push("foster");

//sends the new value to the begining of the array
names.unshift("buster");
//access the whole array 
console.log(cars);
//you can access a single item in the array by using it index number
//indes number starts from 0 - infinity
//we can check the value at the begining of the array

console.log("Index 0 - " + names[0]);
console.log("Index 1 - " + names[1]);
console.log("Index 2 - " + names[2]);
console.log("Index 3 - " + names[3]);
console.log("Index 4 - " + names[4]);
//we can check the value at the last position of the array 
console.log("Index 5 - " + names[5]);
//you can get the size of your array 
console.log("Size is " + names.length);



// you can also remove from an array and store it into a variable using the pop function 
//it removes the last array 
const removedFromCarsLast = cars.pop();
console.log(removedFromCarsLast);


//we can use shift() to remove the first value
const removedFromCarsFirst = cars.shift();
console.log(removedFromCarsFirst);


//muti-dimensional array

const drum = [
    [20,3,5],
    [1,3,4],
    ["tope", "jack", 123],
    [[12,"roster",77], [223, "tosin", 78]]
];
//test1 single array or subarray
const test1 = drum[1];
console.log(test1)

//test2 subarray
const test2 = drum[3];
console.log(test2)

//test3 element of a subarray
//we are selecting the thrid subarray then selecting the second nested subarray
//then we select the second element
const test3 = drum[3][1][1]
console.log(test3)
