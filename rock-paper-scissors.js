const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "rock";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "paper";
body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "scissors";
body.appendChild(scissors);

function getComputerChoice() {
    
    let randomNumberOneToHundred = Math.floor(Math.random() * 100) + 1;

    if (randomNumberOneToHundred >= 1 && randomNumberOneToHundred <= 33) {
        return "rock";
    }

    if (randomNumberOneToHundred >= 34 && randomNumberOneToHundred <= 66) {
        return "paper";
    }

    if (randomNumberOneToHundred >= 67 && randomNumberOneToHundred <= 100) {
        return "scissors";

//other ways: not using math.floor, using modulo of 3 to make comparison simpler. For I'll keep it this way.
    }
}

function playGame() {

    //declaring variables for tracking scores
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let message;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        

        //human win conditions
        if(humanChoice === "rock" && computerChoice === "scissors") {
            message = "You Won! Rock beats Scissors";
            humanScore++;
        }

        else if(humanChoice === "paper" && computerChoice === "rock") {
            message = "You Won! Paper beats Rock";
            humanScore++;
        }

        else if(humanChoice === "scissors" && computerChoice === "paper") {
            message = "You Won! Scissors beats Paper";
            humanScore++;
        }

        //computer win conditions
        else if(computerChoice === "rock" && humanChoice === "scissors") {
            message = "You Lose! Rock beats Scissors";
            computerScore++;
        }

        else if(computerChoice === "paper" && humanChoice === "rock") {
            message = "You Lose! Paper beats Rock";
            computerScore++;
        }

        else if(computerChoice === "scissors" && humanChoice === "paper") {
            message = "You Lose! Scissors beats Paper";
            computerScore++;
        }

        //tie condition
        else {
            message = "It's a tie!";
        }

        const humanResult = document.createElement("div")
        humanResult.textContent = `Round no.: ${roundNumber}, ${message}
        human choice: ${humanChoice}, computer choice: ${computerChoice},
        Human score is: ${humanScore} & computer score is: ${computerScore}`;
        body.appendChild(humanResult);

        roundNumber++

        if (humanScore == 5 || computerScore == 5) {
            const winner = document.createElement("div");
            if( humanScore == 5) winner.textContent = "Winner is the player";
            else if(computerScore == 5) winner.textContent = "Winner is the computer";
            return body.appendChild(winner)
        }
    }

    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

playGame()

//1. remove logic that plays exactly five rounds. Done.
//2. create three buttons, rps. add event listeners that calls playRound for
//for each click and correct player selection.
//3. add a div for results and change all console.log into dom methods