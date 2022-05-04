
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
// ------------------------------------------------------------------------------------------

// playerPlay : to make the player choose between 'rock', 'paper' or 'scissors'
const playerPlay = () => {
return playerSelection 
}

// ------------------------------------------------------------------------------------------

// playRound() : to play a single round
const playRound = (playerSelection, computerSelection) => {    
playerSelection = playerPlay();

    if (playerSelection === computerSelection) {        
        return roundWinner = 'tie'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return roundWinner = 'player'
    
    } else {
        return roundWinner = 'computer'
       }       
}

// ------------------------------------------------------------------------------------------

let numberOfRound = 0;
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

// ------------------------------------------------------------------------------------------

// Play rock 
const playRockRound = document.querySelector('.rock')
playRockRound.addEventListener('click', () => {

    if (numberOfRound <= 4) { playerSelection = 'rock'
    computerSelection = computerPlay()
    let roundWinner = playRound('rock', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You both chose: ${playerSelection}.

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
    } else if (numberOfRound === 5) {
       let hideScreen = document.querySelector('.screenPlayersSelection')
       hideScreen.classList.add('hidden')

       let upResult = document.querySelector('.result')
        upResult.textContent = `RESULTS`

        let startBtnReady = document.querySelector('.startBtn')
        startBtnReady.classList.remove('hidden')
        startBtnReady.textContent = 'FIGHT!'

        startBtnReady.addEventListener('click', () => {
            location.reload();
        })

        if (playerPoints > computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟩 VICTORY 🟩`
        } else if (playerPoints < computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟥 DEFEAT 🟥`
        } else {
            upResult.textContent = `🟧 Tie 🟧`  
        }

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `RESULTS:

        You ${playerPoints} - ${computerPoints} Computer.`
        
    }        
}, capture = true)

// ------------------------------------------------------------------------------------------

// Play paper
const playPaperRound = document.querySelector('.paper')
playPaperRound.addEventListener('click', () => {

    if (numberOfRound <= 4) { playerSelection = 'paper'
    computerSelection = computerPlay()
    let roundWinner = playRound('paper', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You both chose: ${playerSelection}.

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
    } else if (numberOfRound === 5) {
       let hideScreen = document.querySelector('.screenPlayersSelection')
       hideScreen.classList.add('hidden')

       let upResult = document.querySelector('.result')
        upResult.textContent = `RESULTS`

        let startBtnReady = document.querySelector('.startBtn')
        startBtnReady.classList.remove('hidden')
        startBtnReady.textContent = 'FIGHT!'

        startBtnReady.addEventListener('click', () => {
            location.reload();
        })

        if (playerPoints > computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟩 VICTORY 🟩`
        } else if (playerPoints < computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟥 DEFEAT 🟥`
        } else {
            upResult.textContent = `🟧 Tie 🟧`  
        }

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `RESULTS:

        You ${playerPoints} - ${computerPoints} Computer.`
        
    }        
}, capture = true)

// ------------------------------------------------------------------------------------------

// Play scissors
const playScissorsRound = document.querySelector('.scissors')
playScissorsRound.addEventListener('click', () => {

    if (numberOfRound <= 4) { playerSelection = 'scissors'
    computerSelection = computerPlay()
    let roundWinner = playRound('scissors', computerSelection)

  
     if (roundWinner === 'player') {
        playerPoints ++
        numberOfRound++
        let upPlayerScore = document.querySelector('.playerScore')
        upPlayerScore.textContent = playerPoints

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You chose: ${playerSelection}.
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

        let upResult = document.querySelector('.result')
        upResult.textContent = `Round ${numberOfRound}`

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `You both chose: ${playerSelection}.

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
    } else if (numberOfRound === 5) {
       let hideScreen = document.querySelector('.screenPlayersSelection')
       hideScreen.classList.add('hidden')

       let upResult = document.querySelector('.result')
        upResult.textContent = `RESULTS`

        let startBtnReady = document.querySelector('.startBtn')
        startBtnReady.classList.remove('hidden')
        startBtnReady.textContent = 'FIGHT!'

        startBtnReady.addEventListener('click', () => {
            location.reload();
        })

        if (playerPoints > computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟩 VICTORY 🟩`
        } else if (playerPoints < computerPoints) {
            let upResult = document.querySelector('.result')
        upResult.textContent = `🟥 DEFEAT 🟥`
        } else {
            upResult.textContent = `🟧 Tie 🟧`  
        }

        let upScreenPlayers = document.querySelector('.screenPlayersTxt')
        upScreenPlayers.textContent = `RESULTS:

        You ${playerPoints} - ${computerPoints} Computer.`
        
    }        
}, capture = true)

// ------------------------------------------------------------------------------------------

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