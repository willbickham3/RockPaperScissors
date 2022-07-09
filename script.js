// Create an array
let myArray = ['rock', 'paper', 'scissors']
// Allow for a random string to be returned from the array
// write a function that will serve as the computer selecting the string at random
function computerPlay() {
    let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
    return randomValue
}
// write a function that plays a single round of RPS and should take two parameters
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log('It\'s a tie!')
        return
    }   else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
                 (playerSelection == 'paper' && computerSelection == 'rock') || 
                 (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log('The human wins!');
        console.log(playerScore += 1);
        return
    }   else {
        console.log('The computer wins!');
        console.log(computerScore += 1);
        return
    }
}
// write two variables playerSelection, computerSelection
// and two more variables for score
let playerScore = parseInt(0);
let computerScore = parseInt(0);
// the function should return a string with the result of the match
// console.log(playRound(playerSelection, computerSelection));
// playerSelection should be case insensitive
// write a function called game() that calls the match function 5 times with a for loop and console.log the results
function game(){
    for (i = 0; i < 5; i++){
    let playerSelection = prompt('Choose your weapon');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score = ' + playerScore);
    console.log('Computer\'s score = ' + computerScore);
}
}

//console.log(game())
// prompt() should be used to get a user input