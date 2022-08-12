// //
// //

const EventEmitter =  require ('events');
// //ww created an class called MyEmitter
class MyEmitter extends EventEmitter{}
// //new instance of our class
const myEmitter = new MyEmitter();
// //to check for the event
// // //emit is used to emit
// // myEmitter.emit('eventname');
// // //on is used to listen
// // myEmitter.on('eventname', ()=>{
// //     console.log('an event occured!')
// // });

// // //for it to actually show the vent we need to (callback) it
// // myEmitter.emit('eventname');

// //to emit an error
// //=> this is am arrow function
myEmitter.on('error', (err)=>{
    //if you dont want an all out error 
    //console.log('Whoops! there is an error')
    console.log(err)
    //use this to get the entire error
});

myEmitter.emit('error', new Error('Whoops!'));

// //node eternally uses emitters widely across it enivronments
// //streams are built on top of event emitters that raise redefined events like 
// //open, end , data.

//importing it from the fs module
// import { createReadStream } from "fs";

// let chunkIndex = 0;
// const readStream = createReadStream("./cb.txt")

// readStream.on("open", () =>{
//     console.log("starting reading...")
// })

// readStream.on("end", () =>{
//     console.log("Ending reading...")
// })

// readStream.on("data", chunk =>{
//  console.log("chunk: ", + ++chunkIndex);
//  console.log("-------------------")
//  console.log(chunk)
//  console.log("\n")
// });