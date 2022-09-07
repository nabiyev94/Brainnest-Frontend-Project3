// Initial state of players
let playerPoints = 0;
let computerPoints = 0;

// Array of choices to perform the game
const choices = ["rock", "paper", "scissors"];

// Function for Machine
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function for Human
function playerPlay() {
  let play = prompt('Please, it is your turn!');
  while (
    play.trim().toLowerCase() !== 'paper' &&
    play.trim().toLowerCase() !== 'rock' &&
    play.trim().toLowerCase() !== 'scissors'
  ) {
    console.log("Invalid choice!");
    play = prompt('Your input should only be: \n Rock, Paper or Scissors! \n Please, try again!');
  }
  return play;
}

// Function for a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.trim().toLowerCase();

  console.log(`Computer chose ${computerSelection}!`);
  console.log(`Human chose ${playerSelection}!`);

  // Coincidence
  if (playerSelection === computerSelection) return "It's a coincidence!";

  // Rock was chosen
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerPoints++;
      return 'You lose! Paper beats Rock!';
    } else {
      playerPoints++;
      return 'You Win! Rock beats Scissors!';
    }
  }

  // Paper was chosen  
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      computerPoints++;
      return 'You lose! Scissors beat Paper!';
    } else {
      playerPoints++;
      return 'You win! Paper beats Rock!';
    }
  }

  // Scissors was chosen
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerPoints++;
      return 'You lose! Rock beats Scissors!';
    } else {
      playerPoints++;
      return 'You win! Scissors beat paper!';
    }
  }
}

// Function for the whole game with 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. Round`);
    console.log(playRound(playerPlay(), computerPlay()));
  }
  if (computerPoints > playerPoints) {
    console.log(`Computer Won! Result <${computerPoints} - ${playerPoints}>`);
  } else if (computerPoints < playerPoints) {
    console.log(`Player Won! Result <${playerPoints} - ${computerPoints}>`);
  } else {
    console.log(`It's a coincidence! Result <${playerPoints} - ${computerPoints}>`);
  }
}

// Start the game
game();
