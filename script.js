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
	if (playerSelection == 'rock' &&  computerSelection == 'scissors' || playerSelection == 'paper' &&  computerSelection == 'rock' || playerSelection == 'scissors' &&  computerSelection == 'paper') {
        playerScore++;
        return 'You won!'
    }
    else if (playerSelection == 'rock' &&  computerSelection == 'paper' || playerSelection == 'paper' &&  computerSelection == 'scissors' || playerSelection == 'scissors' &&  computerSelection == 'rock') {
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

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('Type Rock, Paper or Scissors:').toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`)
}

var playerScore = 0;
var computerScore = 0;

game()