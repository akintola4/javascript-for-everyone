function sumPrimes(num) {
    var numbers = [];
    
    //create an array of numbers up to and including num
    for (var i = 2; i <= num; i++) {
      numbers.push(i);
    }console.log(numbers)
    
    //filter all numbers in the 'numbers' array, that are not divisible by any number other than themselves without a remainder
     let test = numbers.filter(function(item, index, array) {
      for (var j = 0; j < index; j++) {
        if (item % array[j] === 0)
          return false;
      }
      return true;
    
    //sum up all numbers in the filtered array (=primes)
    })
    let test1 = test.reduce(function(a, b) {
      return a+b;
    });
    console.log(test)
    console.log(test1)
  }

  sumPrimes(10)