var first_name = "akintola";

console.log(first_name);
console.log(typeof first_name);
console.log(first_name.length);
console.log(first_name.toUpperCase());
console.log(first_name.substring(0, 4));

//add two strings 
var a = "tope";
var b = "akintola"

console.log(a + " " +b );
//another method you can, using backquotes
console.log(`${a} ${b.toUpperCase()}`);
// you can also pasing in methods and functions 

//working with objects and constants
    //you can write it like this or 
    //where first_name is a property and "tope" is a property value
    var person = {first_name:"tope", last_name:"Akintola", seecond_name:"akinfolarin", age:"21", eye_color:"brown"};

//you can also write it like this 
var person2 = {first_name:"tope", 
    last_name:"Akintola", 
    seecond_name:"akinfolarin", 
    age:"21", 
    eye_color:"brown",
    //also you can next an object inside an object
    address:{
        country:"Nigeria",
        city:"Lagos",
    }
};
//access the object 
console.log(person2);