//today we work on how to access objects and change them

let user = {
    username: "fola",
    age: 21
}
//access the an existing content of the object and then change it
user.username = "Foster"
//we change fola to foster

//add a new element inside the object 
user["last name"] = "akintola"

console.log(user)

//we can copy content from the objects to a new variable
let people = user["username"];
console.log(people)

//how to access a complex object that has a sub-object inside it 
let web = {
    name: "drakeee",
    years: 23,
    data: {
        online: 433,
        busy: 75,
        awake: 55
    }
}
//we are going to access it and change it contents 
//using the dot notation
web.data.awake = 7500;
console.log(web);

//lets add a new content in the sub object
web.data["running"] = 8000;

console.log(web)

//we can also delete from our objects 
//using the delete keyword
//lets delete years from web
delete web.years //we specife the name of the object than the property we want to delete
console.log(web)

//we can also check if an object has a specific property using two methods
//.hasOwnProperty()method
function check(nameOfObject) {
    //we check if web object has name
    if (nameOfObject.hasOwnProperty("name")) {
        return true
    } else {
        return false
    }
}
//parmemter is the object we want to check 
console.log(check(web))
web.hasOwnProperty("name")
//in method
function check2(nameOfObject) {
    //we check if web object has data
    if ("data" in web) {
        return true
    } else {
        return false
    }
}
console.log(check2(web))

// we can also loop through a object using the for loop 
const website = {
    tosin: {
        online: true
    },
    jeryy: {
        online: true
    },
    Sarah: {
        online: false
    },
    tope: {
        online: true
    },
    drake: {
        online: true
    },
    banziyy: {
        online: false
    }
}

function countOnline(websiteObj) {
    // Only change code below this line
    let result = 0;
    //no need for i = o 
    //user covers that since we are not working on an array 
    //userObj the name of the object
    for (let user in websiteObj) {
        if (websiteObj[user].online === true) {
            //everytime it true result adds +1
            result++
        }
    } return result;

    // Only change code above this line
}

console.log(countOnline(website));

//we can also convert an object into an array 
//using the Object.keys(param) method 
//param is the name of the object
let test2 = Object.keys(website)
console.log(test2)