const http = require("http")


//to make request to extrnal server
const request = http.get('http://www.google.com', (response) => {
    console.log(`status code : ${response.statusCode}`);
    console.log(`headers : ${response.headers}`);

    response.on(`data`, (chunk) => console.log(`Chunk received: ${chunk}`));

});

request.on(`error`, (err) => console.error(err));