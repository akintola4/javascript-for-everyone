
const number =  document.getElementById('numbers');
const operator =  document.getElementById('operators');
const equal = document.getElementById('operator-equal');
const clear =  document.getElementById('clear');

let currentNumber=parseFloat(number);
let previousNumber= parseFloat(number);
let result= equal();

function equal() {
    if (operator == '+') {
       return previousNumber + currentNumber; 
    }
    if (operator == '-') {
       return previousNumber - currentNumber; 
    }
    if (operator == '*') {
       return previousNumber * currentNumber; 
    }
    if (operator == '/') {
       return previousNumber / currentNumber; 
    }
}