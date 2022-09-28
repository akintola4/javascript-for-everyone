//using function to solve array or object problrms
//usign higher order function 
let users =[
    {name: "fola", age:21, sex:"male"},
    {name: "tosin", age:31, sex:"female"},
    {name: "drake", age:34, sex:"female"},
    {name: "tola", age:55, sex:"male"},
    {name: "foster", age:66, sex:"male"},
    {name: "james", age:20, sex:"female"}
]
//filter
var male = users.filter((user) =>
 user.sex === "male"
)
//it create a new array with that conditions
console.log(male)

//now lets check for the female 
var female = users.filter((user) =>
user.sex === "female"
)
console.log(female)
// var usernames = users.map(function(user){
//     return user.name
// })
//arrow functions
//usign map()function
//we return the sub set of the object
//we can also create completly new objects
var usernames = users.map((u) => (u.name + "age is " + u.age))
console.log(usernames)

var age = users.map((user) => (user.age))
console.log(age)

//reduce high order function
//reduce function

var total = users.reduce((sum, users)=> (sum + users.age), 0)
//it needs an object so we put 0

console.log(total)