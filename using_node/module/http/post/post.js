const http = require("http")

const data = JSON.stringify({
    username: "Tope"
});
const options = {
    hostname: '',
    //you can change this to the other methods [DELETE, PUT, POST]
    method: 'POST',
    path: ' ',
    Headers: {
        'Content-Type': 'appication/json'
    }
};

const request = http.request(options, (response) => {
    console.log(`status code : ${response.statusCode}`);
    console.log(`headers : ${response.headers}`);

    response.on(`data`, (chunk) => console.log(`Chunk received: ${chunk}`));

});

request.on(`error`, (err) => console.error(err));
request.write(data);
request.end()