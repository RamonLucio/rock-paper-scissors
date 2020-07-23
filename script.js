function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock'
    }
    else if (randomNumber == 1) {
        return 'paper'
    }
    else if (randomNumber == 2) {
        return 'scissors'
    }
    else {
        return 'Something went wrong! Please try again'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' &&  computerSelection == 'scissors' ||
    playerSelection == 'paper' &&  computerSelection == 'rock' ||
    playerSelection == 'scissors' &&  computerSelection == 'paper') {
        playerScore++;
        return 'You won!'
    }
    else if (playerSelection == 'rock' &&  computerSelection == 'paper' ||
    playerSelection == 'paper' &&  computerSelection == 'scissors' ||
    playerSelection == 'scissors' &&  computerSelection == 'rock') {
        computerScore++;
        return 'You lose!'
    }
    else if (playerSelection == computerSelection) {
        return 'Draw!'
    }
    else {
        return 'Something went wrong! Please try again'
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        let computerChoice = document.querySelector('#computer-choice');
        let playerChoice = document.querySelector('#player-choice');
        let results = document.querySelector('#results-div');
        if (playerSelection == 'rock') {
            playerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png');
        }
            if (playerSelection == 'paper') {
                playerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Rock-paper-scissors_%28paper%29.png')
            }
                if (playerSelection == 'scissors') {
                    playerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_%28scissors%29.png')
                }
        if (computerSelection == 'rock') {
            computerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png');
        }
            if (computerSelection == 'paper') {
                computerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Rock-paper-scissors_%28paper%29.png')
            }
                if (computerSelection == 'scissors') {
                    computerChoice.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_%28scissors%29.png')
                }
        // results.textContent = (playRound(playerSelection, computerSelection));
        // playerRunningScore.textContent = `Your score: ${playerScore}`;
        // computerRunningScore.textContent = `Computer score: ${computerScore}`;
    });
});

let playerScore = 0;
let computerScore = 0;
const playerRunningScore = document.querySelector('#player-score');
const computerRunningScore = document.querySelector('#computer-score');