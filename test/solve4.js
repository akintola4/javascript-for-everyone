// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const souceKeys = Object.keys(source);
  
//     // filter the collection
//     let test= collection.filter(obj => souceKeys
//         .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
//         .reduce((a, b) => a && b));
//         console.log(test)
//   }
function whatIsInAName(collection, source) {

  const souceKeys = Object.keys(source);

  // filter the collection
  let test = collection.filter(obj => {
    //use a for loope to fliter the array (collection)
    for (let i = 0; i < souceKeys.length; i++) {
        //check if it the keys in array has a property of soucekeys

      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
            //if not true don't return the property 
        return false;
      }
    }
    //if true return the property into test
    return true;
  });
  console.log(test)
}
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
      { first: "fola", last: "Capulet" },
      { first: "drake", last: "Capulet" }
    ],
    { last: "Capulet" }
  );