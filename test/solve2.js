//examples leading to the solution 

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3, 5]    
// let arr3 = []
// let test = arr1.every(elem => {
//     if(arr2.includes(elem) == false){
//         arr3.push(elem)
//     } 
// });
// console.log(test)
// console.log(arr3)
//we want to compare the array and return a new array with the 
//common numbers in both 


function diffArray(arr1, arr2) {
    //create a var to collect the new array we find
    let arr3 = []
//see we only using a single for loop to check the array 
//we will create a function we can call to test for different ways 
// array1 and arry2 or array2 and array1
//we do this to be able to check both ways 
    function testBoth(arr1,arr2){
        //use a for loop to loop through the array 
    for (let i = 0; i < arr1.length; i++){
        //we use indexOf method to check if an element i is in the second array 
        // if it brings out -1 then it not in the other array
        if (arr2.indexOf(arr1[i]) === -1) {
            arr3.push(arr1[i])
        }
    }}
    //remeber i said we want to check both ways to confirm
    //now we call the function
    testBoth(arr1, arr2);
    testBoth(arr2,arr1)
    //we return the ouput to our console
    console.log( arr3)
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

    function test(arr1, arr2) {
        console.log( arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item)));
    }
    test([1, 2, 3, 5], [1, 2, 3, 4, 5])