const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Get request on the home page')
});

app.post('/', (req, res)=>{
    res.send('Post request on the home page')
});

app.put('/', (req, res)=>{
    res.send('Put request on the main page')
});

app.delete('/', (req, res)=>{
    res.send('delete request on the main page')
});


app.listen(port,() =>{
    console.log(`example app listening on port ${port}`)
})