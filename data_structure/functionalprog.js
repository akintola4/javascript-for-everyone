//we can make a function accept a function has a parameter 

const prepareRice = () => "Rice";
//these function are stored into a varaible
const prepareBurger = () => "Full-burger";

const getFood = (prepareFood,numFood) => {
    //we create an variable to store the array it has an empty array 
    const Foods = [];
    for(let num = 1; num<=numFood; num++){
        //we use the for loop to repeat it according to the number put into the 
        //numFood parameter
        const Food = prepareFood(); //we create a  variable to collect the function 
        //we are going to be using 
       
        Foods.push(Food)//we push the element into the array 
    }
    return Foods
}
//here we call the function and put in a function and a number into the parameter
const FoodForBurger = getFood(prepareBurger, 20);
const FoodForRice =  getFood(prepareRice, 10);

console.log(FoodForBurger, FoodForRice)


///
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(books,bookName) {

    const book = [...books]
    book.push(bookName);
    console.log(book)
    return book
}
add(bookList, "A Brief History of Time")
//function to remove string from an array
function remove(books,bookName) {
    //create a new var to hold the copy of the array 
    let test = [...books]
  if( test.indexOf(bookName) >= 0){
    test.splice(test.indexOf(bookName), 1);

    console.log(test)
    return test
    }
}
remove(bookList, "The Hound of the Baskervilles")
console.log(bookList)