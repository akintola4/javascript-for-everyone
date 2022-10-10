//this we will be learning how to add elements to the end of any array
//to the begining of an array

let user = [
    27

]
//unshift()
user.unshift("Tope")//adds this value to the begining of the array
//push
user.push("male", "single")//adds this values to the end of the array
//output the new user array
console.log(user);

//now to probably wondering how to we do the oppsite 
//we do that by using the pop() and shift() method 

let school = [
    "name",
    "location",
    "country"
]

//let remove name from the array 
school.shift()// this removes the element from begining of the array

//let remove country from the array 
school.pop()//this removes the element from the endiing of the array
//lets check the new array
console.log(school)

//splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// .splice(start, amountToDelete)
arr.splice(1, 4)
// outputs the new array 
console.log(arr);

//using splice we can remove and add new elements to the array
const htmlcolours = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']
const newcolors = ['DarkSalmon', 'BlanchedAlmond']
//.splice(startindex,amountToDelet, newelemnts)
htmlcolours.splice(0, 2, newcolors)
console.log(htmlcolours)

//we go to learn about .slice() method in js 
//it use to extra elements from an array without changing the array 
//it takes only 2 parameter in .slice(startindex, stopindex)
//also it does copy the stopindex it stops copies the leement before it 

let houses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let houseNumber = houses.slice(3, 9)//here we going to copy [4,5,6,7,8]
//it wont copy the end index at 9
console.log(houseNumber)//output it in our console


//we can also combine two arrays together 
//using concat to combine array without mutating them 

console.log(houses.concat(arr))

//split method 
//we can use it to split a string into an array

function split(str) {
    //|W using a regaular experssion this will split by space and non-leters
    console.log(str.split(/\W/))
}
split("Hello World,I-am code")

//join method to combine an array into a string

function sentensify(str) {
    // create a new array using the split first then store it into a varaible 
    let newArray = str.split(/\W/)
    //then we check the array we created 
    console.log(newArray)
    //then we combine it using the join method and give them space to make it into a word 
    console.log(newArray.join(" "))
}

sentensify("May-the-force-be-with-you");

//
// Only change code below this line
function urlSlug(title) {

    let newArray = title.toLowerCase().trim().split(/\s+/)
    console.log(newArray)
    console.log(newArray.join("-"))
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(" Winter Is  Coming")

//every method in js 
//it used to run through an array to test if a condition is met
//it will return boolean value if true or false 
function checkPositive(arr) {
    //create a new variable to store the value
    //the every method uses a function as a callback 
    let test = arr.every(function (currentValue) {
        if (currentValue > 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    })
    console.log(test)

}

checkPositive([1, 2, 3, -4, 5]);

//we also have the some method it acts just the same has
// the every method 

function chcekHigher(arr) {
    //create a new variable to store the value
    //the every method uses a function as a callback 
    let test = arr.every(function (currentValue) {
        if (currentValue > 10) {
            console.log(true)
        } else {
            console.log(false)
        }
    })
    console.log(test)

}

chcekHigher([1, 2, 3, 9, 10, 5]);

      //Currying i will explain more when i use it on my api project
      //this collects a function has a parameter 
      function sub(x) {
        return function(y) {
            return function(z){
                console.log( x - y - z);
              }
        }
      }
sub(10)(2)(5)

/// another example
    function isGreaterThan(limit) //first function
    {
    return function (value) //second function 
    {
    if(value > limit){
        //am going to write the output in two ways 
        //one with using string template 
        //here i used a back quote to be able to fix in the ${variable}
        console.log(`${value} is greater than ${limit}`)
    }else {
        //using the + operator method 
        console.log(value +" is less than " + limit)
    }
    }}
    
    isGreaterThan(10)(5)//should return true

    isGreaterThan(2)(4)
