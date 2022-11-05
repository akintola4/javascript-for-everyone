/*
question 
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
    const lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let accumlator = '';
    for (const key in lookup) {
      const numberValue = lookup[key];
      while (numberValue <= num) {
        num -= numberValue;
        accumlator += key;
      }
    }
    console.log(accumlator)
  }
  convertToRoman(2);