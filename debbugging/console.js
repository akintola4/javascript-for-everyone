//USing the console.log() method to output to the command line or console

let a="Tope is a Boy";

console.log(a)
//this will  output the value stored inside the variable a

//console.clear() method ois used to clear the console

let output = "yo bro ";
console.log(output);//output 
console.clear()//this will clear the console logs


//we can also use typeof method to check the type of variable we working with 
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);// this will output number 
console.log(typeof three);//this will output string


//we can also console log tables 

const foo = {name:"temi",age: 20,stressed:false}
const doo = {name:"tope",age: 33,stressed:true}
const too = {name:"tayo",age: 24,stressed:false}

//we can give it a title
//we can use the percentage to allow us us css styles in the console
console.log('%c My Friends', 'color,orange')
console.log({foo,doo,too})

//we can also display it has a table in our console
console.table([foo,doo,too])

//if i want to benchmark performance we could use a console method to do that 
console.time('looper')
let i=0;
while(i<1000000){i++}

console.timeEnd('looper')

//we could also use console.log to find where an funcion excuted from 

let test = ()=> console.trace('bye bye database')

test()
test()