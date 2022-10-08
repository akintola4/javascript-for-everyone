//while loops with js

var names = [
    "tope",
    "fola",
    "kike",
    "tosin"
];

//while loop only works when the condition is true

var test = true;

while (test) {
    console.log("hello");
    //the loop will only stop it is false 
    //if not your loop will run forever
    test = false;
}

var index = 0;
//we can pritn out the elements of an array using while loop
while (index < names.length) {
    console.log(names[index])

    index = index + 2;
}

//do while
do {
    //block of code here priints only once
    console.log("hello fola");
    //if true it does any infinite loop
    //n if false only prints once 
} while (false);
