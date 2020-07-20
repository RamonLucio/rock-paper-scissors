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
        return 'Something went wrong!'
    }
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == 'rock' &&  computerSelection == 'scissors'){
        return 'You won! Rock beats Scissors'
    }
    else if (playerSelection == 'rock' &&  computerSelection == 'paper'){
        return 'You lose! Paper beats Rock'
    }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))