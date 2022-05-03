// ------------------------------------------------------------------------------------------
// computerPlay() : to make the computer randomly return 'rock', 'paper' or 'scissors'
const computerPlay = () => {
    // computerChoice is an array with the different choices possible
    const computerChoice = ['rock', 'paper', 'scissors'];
    // randomly return 'rock', 'paper' or 'scissors'
    const computerPlay = Math.floor(Math.random() * computerChoice.length)
    // computerSelection will store the return value of computerPlay()
    let computerSelection = "";
  
    if (computerPlay === 0) {
    return computerSelection = 'rock'
    } else if (computerPlay === 1) {
    return computerSelection = 'paper'
    } else {
    return computerSelection = 'scissors'
    }
}
// console.log(computerPlay()) ---> prints: 'rock', 'paper' or 'scissors'

// ------------------------------------------------------------------------------------------
// playerPlay : to make the player choose between 'rock', 'paper' or 'scissors'
const playerPlay = () => {
// to display a dialog and let the player type his choice between "rock", "paper", or "scissors"
// ---> DECOCHER let inputPlayer = prompt('Type "rock", "paper", or "scissors"')
// to make inputPlayer case insensitive (to compare with computerSelection easily)
// ---> DECOCHER let playerSelection = inputPlayer.toLocaleLowerCase();
// playerSelection will store the return value of playerPlay()
return playerSelection 
}
// console.log(playerPlay()) ---> prints: 'rock', 'paper' or 'scissors'

// ------------------------------------------------------------------------------------------
// playRound() : to play a single round
const playRound = (playerSelection, computerSelection) => {    
// use the return value of computerPlay() and use it as first argument
// ---> DECOCHER computerSelection = computerPlay();
// use the return value of playerPlay() and use it as second argument
playerSelection = playerPlay();

// roundWinner will be use to store the return value of playRound()
// ---> DECOCHER let roundWinner = "";

    // All the conditions where the round = tie
    if (playerSelection === computerSelection) {
        // Logs to resume round
  
        return roundWinner = 'tie'
    // All the conditions where the player wins the round    
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
         // Logs to resume round
      
        return roundWinner = 'player'
    // Others conditions (where computer wins the round)
    } else {
         // Logs to resume round
        
        return roundWinner = 'computer'
       }       
}
// console.log(playRound()) ---> prints: 'tie', 'player' or 'computer'

// ------------------------------------------------------------------------------------------
// function playGame : to play a five rounds game
const playGame = () => {
// To store points/ties 

console.log('------------------------ NEW GAME ------------------------');

    // To play 5 rounds
    for (let i = 1; i <= 5; i++) {
    console.log(`‣ Round ${i}`);

    // <xxx>Points will be use to compare and count points
    switch(playRound()) {
        case 'player':
            playerPoints ++;
            break;
        case 'computer':
            computerPoints ++;
            break;
        case 'tie': 
            tiePoints ++;
            break;   
        }  
}
    // Logs to resume the game
    console.log(`‣ RESULTS :`);
    console.log(`Player points: ${playerPoints}`);
    console.log(`Computer points: ${computerPoints}`);
    console.log(`Ties: ${tiePoints}`);

    // Log to announce the winner depending on points
    if (playerPoints > computerPoints) {
        console.log('🟢 You won the match! 🟢');
    } else if (playerPoints < computerPoints) {
        console.log('🔴 You loose the match! 🔴');
    } else {
        console.log('🟠 Tie! 🟠');
    }
}
// playGame() 

// ----------------------
let numberOfRound = 0;
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;


// Play rock
const playRockRound = document.querySelector('.rock')
playRockRound.addEventListener('click', () => {
    
    playerSelection = 'rock'
    computerSelection = computerPlay()
    let roundWinner = playRound('rock', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟩 You won the round!`
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟩 You won this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');

        return numberOfRound;

        } else if (roundWinner === 'computer') {
        computerPoints ++
        numberOfRound++
        let upComputerScore = document.querySelector('.computerScore')
        upComputerScore.textContent = computerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}. 

        🟥 Computer won the round!`
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟥 You lose this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');

        return numberOfRound;

        } else {
        tiePoints ++
        numberOfRound++
        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟧 Tie!`
      // ----------------------------------------------------------------
      console.log('Round: ' + numberOfRound);
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log('🟧 You lose this round!'); 
      console.log('Your point(s): ' + playerPoints);
      console.log('Computer point(s): ' + computerPoints);
      console.log('Tie(s): '+ tiePoints);
      console.log('------------------------');

      return numberOfRound;
        }
}, capture = true)

// Play paper
const playPaperRound = document.querySelector('.paper')
playPaperRound.addEventListener('click', () => {
    
    playerSelection = 'paper'
    computerSelection = computerPlay()
    let roundWinner = playRound('paper', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟩 You won the round!`

        
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟩 You won this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');
       
        return numberOfRound;

        } else if (roundWinner === 'computer') {
        computerPoints ++
        numberOfRound++
        let upComputerScore = document.querySelector('.computerScore')
        upComputerScore.textContent = computerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}. 

        🟥 Computer won the round!`
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟥 You lose this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');

        } else {
        tiePoints ++
        numberOfRound++
        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟧 Tie!`
      // ----------------------------------------------------------------
      console.log('Round: ' + numberOfRound);
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log('🟧 You lose this round!'); 
      console.log('Your point(s): ' + playerPoints);
      console.log('Computer point(s): ' + computerPoints);
      console.log('Tie(s): '+ tiePoints);
      console.log('------------------------');
        }
}, capture = true)

// Play scissors
const playScissorsRound = document.querySelector('.scissors')
playScissorsRound.addEventListener('click', () => {
    
    playerSelection = 'scissors'
    computerSelection = computerPlay()
    let roundWinner = playRound('scissors', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟩 You won the round!`
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟩 You won this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');
       

        } else if (roundWinner === 'computer') {
        computerPoints ++
        numberOfRound++
        let upComputerScore = document.querySelector('.computerScore')
        upComputerScore.textContent = computerPoints

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}. 

        🟥 Computer won the round!`
        // ----------------------------------------------------------------
        console.log('Round: ' + numberOfRound);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log('🟥 You lose this round!'); 
        console.log('Your point(s): ' + playerPoints);
        console.log('Computer point(s): ' + computerPoints);
        console.log('Tie(s): '+ tiePoints);
        console.log('------------------------');

        return numberOfRound;

        } else {
        tiePoints ++
        numberOfRound++
        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `Round: ${numberOfRound}

        You chose: ${playerSelection}.
        Computer chose: ${computerSelection}.

        🟧 Tie!`
      // ----------------------------------------------------------------
      console.log('Round: ' + numberOfRound);
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log('🟧 You lose this round!'); 
      console.log('Your point(s): ' + playerPoints);
      console.log('Computer point(s): ' + computerPoints);
      console.log('Tie(s): '+ tiePoints);
      console.log('------------------------');
        }
}, capture = true)

// New game
const newGame = document.querySelector('.startBtn')
newGame.addEventListener('click', () => {
let revealHidden = document.querySelector('.hidden')
revealHidden.classList.remove('hidden')

let startBtnReady = document.querySelector('.startBtn')
startBtnReady.textContent = 'FIGHT!'

startBtnReady.addEventListener('click', (e) => {
e.target.classList.add('hidden')
})








})


