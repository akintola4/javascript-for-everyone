//
//

const EventEmitter =  require ('events');
//ww created an class called MyEmitter
class MyEmitter extends EventEmitter{}
//new instance of our class
const myEmitter = new MyEmitter();
//emit is used to emit
myEmitter.emit('eventname');
//on is used to listen
myEmitter.on('eventname', ()=>{
    console.log('an event occured!')
});

//for it to actually show the vent we need to (callback) it
myEmitter.emit('eventname');