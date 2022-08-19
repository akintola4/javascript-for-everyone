//frist server 
//npm start to start our server 
const http = require('http');

const host = '127.0.0.1';
const port = 5000;

//request methods
// const server = http.createServer((req, res) =>{
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.headers)
// });

//go to the json file you will see we have a new depandancies called nodemon
//it used for monitoring files changes 
//thus we dont need to restart or run the code {npm start}
const server = http.createServer((req, res) =>{
    //using status codes and headers
    // res.statusCode = 200;
    // res.setHeader('content.Type', 'text/plain')
   res.end('Hello I am tope akintola')
});
server.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`)
})