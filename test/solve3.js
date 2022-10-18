function destroyer(arr, ...valsToRemove) {

    let arr1 = [...arr]
    let arr2 = valsToRemove
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
        //we return the ouput to our console
        console.log( arr3)
    }
diffArray(arr1,arr2)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
destroyer([2, 3, 2, 3], 2, 3)
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
destroyer(["tree", "hamburger", 53], "tree", 53)


//we going to create a function to remove elements
//from arr2 from arr1
function destroyer(arr, ...valsToRemove) {
    console.log(valsToRemove)
    let arr1 = [...arr]
    let arr2 = valsToRemove
    
    console.log(arr1)
   let arr3 = arr1.filter(function(elem){
    return !valsToRemove.includes(elem)
   })
    console.log(arr3);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);