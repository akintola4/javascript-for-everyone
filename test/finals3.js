/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on
*/

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]
// function check(str) {
//     if(str == str.toUpperCase()){
//         console.log(alphabet[0].toUpperCase())
//         console.log(true)
//     }else{
//         console.log(false)
//         console.log(alphabet.toLowerCase())

//     }
// }
function rot13(str){
let accumlator = ''

for(let i =0; i<str.length; i++){
    const char = str[i]

    const checkchar = alphabet.includes(char)
    if(checkchar === false){
        accumlator += char
    }else{
        const charIndex = alphabet.indexOf(char)
      accumlator += alphabet[charIndex + 13] || alphabet[charIndex -13 ]
      
    }
}
return accumlator
}

console.log(rot13("TOSIN IS A BOY"))