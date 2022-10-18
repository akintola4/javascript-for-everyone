function myReplace(str, before, after) {
    let arr = str.split(/\s/)

    console.log(arr.indexOf(before))
let position = arr.indexOf(before)
if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
    let newArr = [...arr]
    newArr[position] = after
    console.log(newArr.join(" "))
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
  myReplace("His name is Tom", "Tom", "john")
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
