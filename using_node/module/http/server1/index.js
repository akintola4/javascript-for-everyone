//frist server 
//npm start to start our server 
const http = require('http');

const host = '127.0.0.1';
const port = 5000;


//go to the json file you will see we have a new depandancies called nodemon
//it used for monitoring files changes 
//thus we dont need to restart or run the code {npm start}
const server = http.createServer((req, res) =>{
   res.end('this is our first server, yayi!!')
   //it going to output this in the broswer
});
server.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`)
})