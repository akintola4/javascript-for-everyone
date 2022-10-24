function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        console.log(result += currNumber);
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    console.log(result);
    
  }
  
  sumFibs(10);