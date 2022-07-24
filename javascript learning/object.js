///working with objects and constants
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
//access the main object 
console.log(person2);

//access the propertise  an object
console.log("what your eye color" + " " +person2.eye_color);

//access properties inside a nested object
console.log(person2.address.city);

//access the property it in form of an array 
console.log(Object.values(person2));

//access the keys of the values in form of an array 
console.log(Object.values(person));

//access it in form of a string
console.log(JSON.stringify(person2));