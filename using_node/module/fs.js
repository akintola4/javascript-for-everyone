//to be able to use the module we  must first require it
const fs = require('fs')

//read from the file
fs.readFile('read.txt', 'utf-8', (err, data)=>{
    if (err) {
        console.error(err)
        return;
    }
    console.log(data)
});

//we can also write to a file
const content = "i can change the content of the this file";
// if the file we looking for isnt there it will create an new file for
fs.writeFile('write.txt', content ,err =>{
    if (err) {
        console.error(err)
        return;
    }
    console.log("file written successfully")
}); 

//lets read it to see the content of the new file 
fs.readFile('write.txt', 'utf-8', (err, data)=>{
    if (err) {
        console.error(err)
        return;
    }
    console.log(data)
});

//we can also delete a file 
//note create a file called delete.txt give it any content
//now continue

fs.unlink('delete.txt', err => {
    if(err){
        console.error(err)
        return;
    }
    console.log("we successfully deleted this file");
});

//if you check it should be deleted now