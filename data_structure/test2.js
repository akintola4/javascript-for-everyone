const squareList = arr => {
    // Only change code below this line
    let array = arr.filter(num => num > 0 && num % parseInt(num) === 0)
    console.log(array)
    let test1 =  array.map((index => (
        Math.pow(index, 2)
    )));
   return test1
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

