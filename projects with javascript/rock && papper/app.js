const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

//used the let keyword to be able to reassign the keys
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice= e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getresult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  
   // console.log(randomNumber) i used this to see the random choices number the computer genrated 


//here all the choices that were in numbers are then converted to strings 
    if (randomNumber === 1) {
      computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
      }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getresult() {
    if (computerChoice === userChoice) {
        result = "it's a draw"
    }
    //this are for win for the computer
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lost!!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!!"
    }
    //this are for win for the users
    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "You Win!!"
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        result = "You Win!!"
    }
    if (userChoice === "paper " && computerChoice === "rock") {
        result = "You Win!!"
    }
   resultDisplay.innerHTML = result;
}