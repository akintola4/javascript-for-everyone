//var keyword 


//it host the var i above 
var i;

for (var i = 0; i <=10; i++) {
    console.log(i);
}

// thus if you  call the variable outside the for loop it continues the for loop
console.log("the value of i outside the loop " + i);
//it is bad since we only want it to work in the loop not outside 