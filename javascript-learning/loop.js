//loops
//for loop

for (let i = 0; i <=10; i++) {
    console.log(i);
    
}


//using a for loop with an array 

var names = [
    "tope",
    "tosin",
    "anna",
    "kike"
];

for (let x = 0; x <=names.length; x++) {
    console.log(names[x]);
    
}
console.log()
//using forof 
console.log("for of ")
for (const name of names) {
    console.log(name)
}

//using foreach
console.log()
names.forEach(function(name){
    console.log(name)
});