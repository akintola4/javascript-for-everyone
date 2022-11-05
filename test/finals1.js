/*
qestion
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
*/


function palindrome(str) {
    let test1 = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
console.log(test1)
    let newstr = [...test1]
    console.log(newstr)
    let test2= newstr.reverse().join("").toLowerCase()
    console.log(test2)
   if(test1 === test2){
     console.log(true)
   }else {
     console.log(false)
   }
  }
  
  palindrome("eye");
  palindrome("My age is 0, 0 si ega ym.")
  palindrome("A man, a plan, a canal. Panama")
  palindrome("race car")