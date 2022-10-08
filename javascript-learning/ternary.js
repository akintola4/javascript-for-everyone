//ternary if statements 
// if is represented with ?

//else is represented with  :
var number = 2;
var result = number % 2==0 ? "Even" : "Odd";
console.log(result)

function reverseAlpha(arr) {
  let newArray = arr.slice()
    console.log( newArray.sort(function(a, b)//parameters
     {
            //if(a===b) return 0
            //else if (a<b) return 1
            //else return -1
      return (a === b) ? 0 : (a < b) ? -1 : 1;
    }))
  }
  
  reverseAlpha(["f","b","d","a", "c", "e"])

  function gfg() {  
    //JavaScript to illustrate
    //multiple Conditional operators
  
    let marks = 95;
    let result = (marks < 40) ? "Unsatisfactory" : 
             (marks < 60) ? "Average" :
             (marks < 80) ? "Good" : "Excellent" ;
  
    console.log(result);
    }  
    gfg();  
//arrange a array of numbers 
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let newArray = arr.slice()

return newArray.sort(function(a,b){
  return (a-b)
})
  // Only change code above this line
}

nonMutatingSort(globalArray);