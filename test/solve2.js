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
    let arr3 = []
    function testBoth(arr1,arr2){
    for (let i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1) {
            arr3.push(arr1[i])
        }
    }}
    testBoth(arr1, arr2);
    testBoth(arr2,arr1)
    console.log( arr3)
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

    function test(arr1, arr2) {
        console.log( arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item)));
    }
    test([1, 2, 3, 5], [1, 2, 3, 4, 5])