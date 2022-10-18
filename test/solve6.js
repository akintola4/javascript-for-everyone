
function translatePigLatin(str) {
    let pigLatin = ""
    
    // aeiou the letters to check for
    let myRegex = /[aeiou]/gi
    if (str[0].match(myRegex)) {
        pigLatin = str + "way";
      } else if (str.match(myRegex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
      } else {
        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(myRegex)[0]);
    console.log(vowelIndice)
        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice)/*this remove the first letter in the string*/ + str.substr(0, vowelIndice) + "ay"/* then we add ay to the rest of the string*/;
      }    
console.log(pigLatin)
  }
  
  translatePigLatin("consonant");
  