/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


*/

//first idea 
function telephoneCheck(str) {
    const vaild =[
  "555-555-5555",
  "(555)555-5555",
  "(555) 555-5555",
  "555 555 5555",
  "5555555555",
  "1 555 555 5555"
    ]
    // countryCode = "1" str.includes(countryCode)
  for(let i=0; i<vaild.length; i++){
    if(str == vaild[i] || str.match(/^["1"]/)){
      return true 
    }else{
      return false
    }
  }
  }
  
  console.log(telephoneCheck("555-555-5555"))
  console.log(telephoneCheck("1 555-555-5555")) //should return true.
console.log(telephoneCheck("1 (555) 555-5555")) //should return true.
console.log(telephoneCheck("5555555555")) //should return true.
console.log(telephoneCheck("(555)555-5555")) //should return true.
console.log(telephoneCheck("1(555)555-5555")) //should return true.
console.log(telephoneCheck("1 555 555 5555")) //should return true.
console.log(telephoneCheck("1 456 789 4444"))
console.log(telephoneCheck("10 (757) 622-7382"))

//second idea and correct
function telephoneCheck(str) {
    let countrycode = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
    let countrytest = countrycode.test(str)
    console.log(countrytest)
  
    if(countrytest === true ){
      return true 
    }else{
      return false
    }
  }
  
  telephoneCheck("555-555-5555");