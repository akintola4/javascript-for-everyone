/*
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.
*/
//remember grade school math for lcm we going to be using the mutiple method to get our lcm 
function smallestCommons(arr) {
    var max = Math.max(arr[0], arr[1]);
    console.log(max)
      var min = Math.min(arr[0], arr[1]);
      console.log(min)
      
      var test = max;
    //now we loop through to get our mutiple
      for(var i = max; i >= min; i--){
        if(test % i !== 0){
          test += max; 
          i = max;
        } 
      }
    
      console.log( test);  
    }
    
    smallestCommons([1,5]);