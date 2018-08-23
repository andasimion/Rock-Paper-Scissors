var textArea = document.getElementById('text-area'),
    newGame = document.getElementById('new-game-button'),
    rock = document.getElementById('rock-button'),
    paper = document.getElementById('paper-button'),
    scissors = document.getElementById('scissors-button'),
    divElement = document.getElementById('score'),
    playerScoreElement = document.getElementById('player-score'),
    opponentScoreElement = document.getElementById('opponent-score'),
    playerOption = document.getElementById('player-option'),
    opponentOption = document.getElementById('opponent-option'),
    options = ['rock', 'paper', 'scissors'],
    playerScore = 0,
    opponentScore = 0;

divElement.style.display = 'none';
rock.style.display = 'none';
paper.style.display = 'none';
scissors.style.display = 'none';

newGame.addEventListener('click', function() {
    textArea.innerText = 'Choose your option!';
    newGame.style.display = 'none';
    rock.style.display = 'inline';
    paper.style.display = 'inline';
    scissors.style.display = 'inline';
    divElement.style.display = 'none';
})

function updateScore() {
    playerScoreElement.innerText =  playerScore;
    opponentScoreElement.innerText =  opponentScore;
    if (playerScore == 3)  {
        textArea.innerText = 'Game over! You win!';
        displayGameOver();
        return;
    }
    if (opponentScore == 3) {
        textArea.innerText = 'Game over! Opponent wins!';
        displayGameOver();
        return;
    }
}

function robotChoice() {
    let index = Math.trunc(Math.random() * options.length);
    return options[index];
}

function displayGameOver() {
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    newGame.style.display = 'block';
    playerScore = 0;
    opponentScore = 0;
}


function makeEventListener(myChoice) {
    return function() {
    divElement.style.display = "block"
    let robot = robotChoice();
    playerOption.innerText =  myChoice;
    opponentOption.innerText = robot;
    if ((myChoice == 'rock' && robot == 'rock') || 
        (myChoice == 'paper' && robot == 'paper') || 
        (myChoice == 'scissors' && robot == 'scissors')) {
            textArea.innerText = "It's a tie! Choose again!";
            updateScore();
    }
    
    if ((myChoice == 'rock' && robot == 'scissors') || 
        (myChoice == 'paper' && robot == 'rock') || 
        (myChoice == 'scissors' && robot == 'paper')) {
            textArea.innerText = "You win!";
            playerScore +=1;
            updateScore();
    }
    
    if ((myChoice == 'rock' && robot == 'paper') || 
        (myChoice == 'paper' && robot == 'scissors') || 
        (myChoice == 'scissors' && robot == 'rock')) {
            opponentScore +=1;
            textArea.innerText = "You lose!";
            updateScore();
    }    
}}



rock.addEventListener('click', makeEventListener('rock'));      

        
paper.addEventListener('click', makeEventListener('paper'));


scissors.addEventListener('click', makeEventListener('scissors'));
 

