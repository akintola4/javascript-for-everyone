//we can require our coden= to use the function 
//fron another package using require() method
//pacakge is a piece of re-useable code   
const {add, sub} = require('./def_module')
console.log(add(2, 3));


console.log(sub(2, 3));