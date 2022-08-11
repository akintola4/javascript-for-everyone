//event loop makes us able to run asynchronous task 
console.log("i come first");

//blocking operation
setTimeout(() => {
    console.log("i come second");
}, 3000);
//this block of code will take time to be excuted since node checked
//and saw it should wait before excuting 

console.log("i come last");