function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];
    //first loop through the first array block 
    for (let i = 0; i < args.length; i++) {
        //second loop through the content on the array inside the argumen
      for (let j = 0; j < args[i].length; j++) {
        //if reuslt does not include the item add it 
        if (!result.includes(args[i][j])) {
            //send the new element into the new array block
          result.push(args[i][j]);
        }
      }
    }
    //output the new array 
    console.log(result);
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);