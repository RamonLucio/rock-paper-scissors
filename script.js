function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        return 'rock'
    }
    else if (randomNumber == 1){
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
	if (playerSelection == 'rock' &&  computerSelection == 'scissors' || playerSelection == 'paper' &&  computerSelection == 'rock' || playerSelection == 'scissors' &&  computerSelection == 'paper'){
        return 'You won!'
    }
    else if (playerSelection == 'rock' &&  computerSelection == 'paper' || playerSelection == 'paper' &&  computerSelection == 'scissors' || playerSelection == 'scissors' &&  computerSelection == 'rock') {
        return 'You lose!'
    }
    else if (playerSelection == computerSelection) {
        return 'Draw!'
    }
    else {
        return 'Something went wrong! Please try again'
    }
}

const playerSelection = prompt('Type Rock, Paper or Scissors:').toLowerCase()
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))