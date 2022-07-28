
//from JSON to objects
const mejson = `{
    "name": "fola",
    "age": 21,
    "married": false,
    "extra-names": [
        "foster",
        "tope"
    ]
}`;

const me =  JSON.parse(mejson);

console.log(me); 


//from object to Json

const person = {
    name: 'fola',
    age: 21,
    married: false,
    'extra-names': [ 'foster', 'tope' ]
  };

  const personjson = JSON.stringify(person);

  console.log(personjson)
