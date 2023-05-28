let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round(Math.random() * 9);

const getAbsoluteDistance = (number, target) => Math.abs(number-target);

const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
    if(humanGuess > 9  || humanGuess < 0){
      alert();
    }
    let humanToTarget = getAbsoluteDistance(humanGuess, secretTarget);
    let computerToTarget = getAbsoluteDistance(computerGuess, secretTarget);
    if(humanToTarget === computerToTarget){
        return "Tie";
    }else if(humanToTarget > computerToTarget){
        return false;
    }else{
        return true;
    }
}

const alert =  () => { console.log('Number out of range');}
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
