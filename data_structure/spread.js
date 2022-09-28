//spread method ia es6 method used to copy an array 
//[..] thats the spread method
let user= [
    "fola",
    "tosin",
    "foster"
]
let names= [...user, "we copied this"]//we can use this copy the whole array

console.log(names)//output the names in the console


//we can aslo use it to combine mutiple arrays 
let age=[
    27,67,88
]
let usernames = ["drake", ...user, "age", ...age]// here we combine mutiple array together
console.log(usernames)