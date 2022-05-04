// ---------------------------------------------------------------------------
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
        }
}, capture = true)

// --------------------------------------------

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