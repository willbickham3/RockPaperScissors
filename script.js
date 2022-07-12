let myArray = ['rock', 'paper', 'scissors']
function computerPlay() {
   let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
    return randomValue
}
let playerScore = parseInt(0);
let computerScore = parseInt(0);

// setting variables for computer/playerscore
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
// setting users buttons for event lsiteners
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

// naming variable for results
const results = document.querySelector('.result');
const round = document.querySelector('.round');

// function to play the game for one round
function playRound(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        console.log('It\'s a tie!')
        round.textContent = `It\'s a tie! You both have chosen ${playerSelection}.`
        return
    }   else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
                 (playerSelection == 'paper' && computerSelection == 'rock') || 
                 (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log('The human wins!');
        console.log(playerScore += 1);
        playerPoints.textContent = `${playerScore}`;
        round.textContent = `You\'ve won this round! You chose ${playerSelection} while the computer chose ${computerSelection}.`
                    if (playerScore == 5) {
                        results.textContent = `You are victorious! Your score is ${playerScore} and the computer scored ${computerScore}!`
                        rockButton.removeEventListener('click', playRound);
                        paperButton.removeEventListener('click', playRound);
                        scissorsButton.removeEventListener('click', playRound);
                    }
        return
    }   else {
        console.log('The computer wins!');
        console.log(computerScore += 1);
        computerPoints.textContent = `${computerScore}`;
        round.textContent = `You\'ve lost this round! You chose ${playerSelection} while the computer chose ${computerSelection}.`;
                    if (computerScore == 5) {
                            results.textContent = `You lose :( Your score is ${playerScore} and the computer scored ${computerScore}!`
                            rockButton.removeEventListener('click', playRound);
                            paperButton.removeEventListener('click', playRound);
                            scissorsButton.removeEventListener('click', playRound);
                    }
        return
    }
}

// event listeners for the buttons
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
