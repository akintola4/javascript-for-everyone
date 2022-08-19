const http = require("http")

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) =>{
    const urlPath = req.url;
    if (urlPath === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('this is our first server, yayi!!')
    }else if (urlPath === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('this is our about page')
    }else if (urlPath === '/user'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('this is our user page')
    }else if (urlPath === '/support'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('this is our support page')
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain')
        res.end('the page can not be found')
    }
});
server.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`)
})