//this we will be learning how to add elements to the end of any array
//to the begining of an array

let user = [
    27

]
//unshift()
user.unshift("Tope")//adds this value to the begining of the array
//push
user.push("male","single")//adds this values to the end of the array
//output the new user array
console.log(user);

//now to probably wondering how to we do the oppsite 
//we do that by using the pop() and shift() method 

let school=[
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
arr.splice(1,4)
// outputs the new array 
console.log(arr);

//using splice we can remove and add new elements to the array
const htmlcolours = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']
const newcolors = ['DarkSalmon', 'BlanchedAlmond']
//.splice(startindex,amountToDelet, newelemnts)
htmlcolours.splice(0,2, newcolors)
console.log(htmlcolours)

//we go to learn about .slice() method in js 
//it use to extra elements from an array without changing the array 
//it takes only 2 parameter in .slice(startindex, stopindex)
//also it does copy the stopindex it stops copies the leement before it 

let houses= [0,1,2,3,4,5,6,7,8,9,10];
let houseNumber= houses.slice(3,9)//here we going to copy [4,5,6,7,8]
//it wont copy the end index at 9
console.log(houseNumber)//output it in our console


//we can also combine two arrays together 
//using concat to combine array without mutating them 

console.log(houses.concat(arr))

//reduce method 
//
