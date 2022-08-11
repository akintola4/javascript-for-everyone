//we going to talk about types of errors in js

//error is a problem in our js code. i.e (reference error, type error, type error)
// expections are codnitions our application is aware about and are prepared to deal with using try catch

//reference error
x = 3
// this will lead to a error is y is not defined 
//solution
//we will have to define y
y = 4
console.log(x+y)
//synatx error
//console.log("i am tope ');
//how do we solve it we chnage the quote in both side to the same quotes
console.log("i am tope")

//type error 
var num = 2
//this will bring out an error since it converting a interger to string in uppercase
//console.log(num.toUpperCase());
//solution 
console.log(num)

//expections 
function divide(dividend, divisor) {
    if (divisor==0) {
        throw new Error("cannot divide by zero")
    }
    return dividend/divisor
}

//console.log(divide(10, 0))
//to solve this we change our divisor to a whole number 

//we can aslo try the try and catch method

try {
    console.log(divide(10, 2));
} catch (error) {
    console.error("you divide by zero, change our divisor")
}
//since we know the error we can now change the divisor or denominator