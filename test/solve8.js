function pairElement(str) {
    //get all the possible pairs
    let pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }
    //split the string into arrays 
    let newArr = str.split("")
    //using the map to loop through the new array 
    let test = newArr.map((x) => [x, pairs[x]])
    console.log(test)
}

pairElement("GCG");