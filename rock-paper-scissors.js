// function definition
function getComputerChoice() {
    // store a random number from 1 to 100
    let randomNumberOneToHundred = Math.floor(Math.random() * 100) + 1;

    //if statement that returns rock if number is between 1 to 33
    if (randomNumberOneToHundred >= 1 && randomNumberOneToHundred <= 33) {
        return "rock";
    }

    //if statement that returns paper if number is between 34 to 66
    if (randomNumberOneToHundred >= 34 && randomNumberOneToHundred <= 66) {
        return "paper";
    }

    //if statement that returns scissors if number is between 67 to 100
    if (randomNumberOneToHundred >= 67 && randomNumberOneToHundred <= 100) {
        return "scissors";

//other ways: not using math.floor, using modulo of 3 to make comparison simpler. For I'll keep it this way.
    }
}

//function definition
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors! What's your choice?");
    return humanChoice;
}

//declaring variables for tracking scores
let humanScore = 0;
let computerScore = 0;

//function definition
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    //their choices
    console.log(`human choice is: ${humanChoice}`)
    console.log(`computer choice is: ${computerChoice}`)

    //human win conditions
    if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Won! Rock beats Scissors");
        humanScore++;
    }

    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Won! Paper beats Rock");
        humanScore++;
    }

    else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Won! Scissors beats Paper");
        humanScore++;
    }

    //computer win conditions
    else if(computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }

    else if(computerChoice === "paper" && humanChoice === "rock") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }

    else if(computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }

    //tie condition
    else {
        console.log("It's a tie!");
    }

    console.log(`The human score is: ${humanScore}`);
    console.log(`The computer score is: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);