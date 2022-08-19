const http = require("http")

const host = '128.0.0.1';
const port = 5000;

const server = http.createServer((req, res) =>{
    req.on('error', (err)=>{
        console.log('An error occured! ')
    });
    req.on('error', (err)=>{
        console.log('An error occured! ')
    });
});
server.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`)
})