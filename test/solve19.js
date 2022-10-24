function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number"){
        console.log( undefined);
    }
    else if (arguments.length === 1){
        console.log( (second) => addTogether(first, second));
    }    
    else if (typeof(second) !== "number"){
        console.log(undefined);
    }else{
        let test = first + second;
        console.log(test)
    }  
      
  }
  addTogether(2,3);
  addTogether(5)(7)
  addTogether("2", 3);