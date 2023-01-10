let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target randomly so the user and the computer can guess a number closest to it:
const generateTarget = () => Math.floor(Math.random() * 10)
    /**
     * 
     * @param {*} numberOne 
     * @param {*} numberTwo 
     * @returns absolute distance to determine wich guess is the closest to the target number
     */
const getAbsoluteDistance = (numberOne, numberTwo) => Math.abs(numberOne - numberTwo);


const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const getTie = getAbsoluteDistance(userGuess, computerGuess);
    const getCloserUser = getAbsoluteDistance(userGuess, secretTarget);
    const getCloserComputer = getAbsoluteDistance(computerGuess, secretTarget);

    if (getTie === 0) { // If there's a tie, the user wins
        return true;
    } else if (getCloserUser < getCloserComputer) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;
const advanceRound = () => currentRoundNumber += 1;