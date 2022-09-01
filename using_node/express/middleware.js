//a middleware function 

const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res, next)=>{
    res.send('Time:', Date.now())
});

app.get('/user/id:', (req, res, next)=>{
    res.send('Request Type:', req.method)
    next()
    },(req, res) =>{
        res.send(res.params.id);
});

app.listen(port,() =>{
    console.log(`example app listening on port ${port}`)
})