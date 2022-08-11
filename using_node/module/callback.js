// node originally use callback patterns for every asynchronous operation 
//callbacks are functions called at the completion of a given task

//fs(file- module) is a function
//the fs module provides functions such as to access and interact with the file system
const fs = require('fs');

//cd.text(filename), utf8(encoding), (err, data){call back}
fs.readFile('cb.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});