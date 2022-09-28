//we are going to be using a for loop to iterate through an array

let usernames = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
//we can use a function to solve this so we can call the function anytime
function fliter(arr, elem)//takes in the array and the element we looking for
{
    //this for loop will search throught all the element of the array for the element we looking for 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            //will return found if it sees it  
            console.log("Found");
        } else {
            //return not found if it doesnt find the element in the array
            console.log("NOT FOUND")
        }
    }

}
console.log(fliter(usernames, 3))


//another example of for

function filteredArray(arr, elem) {
    let newArr = [];
    // the for loop 
    for (let i = 0; i < arr.length; i++) {
        //this will use the indexOF() method to check for the place the element appeared 
        if (arr[i].indexOf(elem) == -1) {
            //if element is not found we return the array
            newArr.push(arr[i])
        }
    }
    // if the element is found it return the element without it or 
    //remove them if it together in a sub array i.e [[3,4],[4,5]]
    //and them element we looking for is 3
    //it removes the first sub array but leaves the second
    return newArr;

}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 3));
