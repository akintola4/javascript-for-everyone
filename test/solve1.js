//examples leading up to the solution
function sumAll (arr) {
    const min = Math.min(...arr);
    console.log(min)
    const max = Math.max(...arr);
    console.log(max)
    console.log (((max - min + 1) * (min + max)) / (2));
}

sumAll([2, 10])
///

function test(arr) {
   let result = arr.reduce((sum,arr)=> (sum + arr), 0)
   console.log(result)
}

test([1,4])

//this method we can use a for loop to add the content of an array

let array = [10,20]
var total = 0
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
console.log(total)

var total = 0
for (let i = 1; i <= 4; i++) {
    total += i;
}
console.log(total + "hmm")


//using a for loop
//For example, sumAll([4,1]) should return 10 because
// sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(ar2) {
  let max = Math.max(...ar2)
  let min = Math.min(...ar2)
//   console.log(max)
//   console.log(min)
let total = 0;
  for (let i = min; i <= max; i++) {
     total +=i;
  }
  console.log(total)
}

sumAll([1, 4]);