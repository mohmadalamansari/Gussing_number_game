// let randomNumber = (Math.floor(Math.random() * 100 + 1))

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParasi');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click', function (e) {
//         e.preventDefault()
//         const guess = parseInt(userInput.value);
//         validation(guess);
//     })
// }
// function validation(guess) {
//     if (isNaN(guess)) {
//         alert('please enter a valid msg ')
//     } else if (guess < 1) {
//         alert('please enter a larger Number than 1 ')
//     }
//     else if (guess > 100) {
//         alert('please enter a less than 100  ')
//     } else {
//         prevGuess.push(guess);
//         if (numGuess === 10) {
//             displayGuess(guess);
//             displayGuess(`Game over . Random number wa ${randomNumber}`)
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMessage(`you guessed it right `)
//         endGame();
//     } else if (guess < randomNumber) {
//         displayMessage(`Number is too Low`);
//     }
//     else if (guess > randomNumber) {
//         displayMessage(`Number is too high`);
//     }
// }
// function displayGuess(guess) {
//     userInput.value = '';  // cleaning input 
//     guessSlot.innerHTML += `${guess} , `
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2>${message}</h>`
// }
// function endGame() {
//     userInput.value = '' ;
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button');
//     p.innerHTML = `<h2>id='newGame' Start newGame</h2>`
//     startOver.appendChild(p);
//     playGame(false)
//     newGame();

// }

// function newGame() {
//    const newGameButton =  document.querySelector('#newGame');
//    newGameButton.addEventListener('click' ,function(el){
//     randomNumber = Math.floor(Math.random()*100+1);
//     prevGuess = []
//     numGuess = 1 ; 
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess}`
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p)
//     playGame(true);
//    })
// }
let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // lowercase 'd'

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validation(guess);
    });
}

function validation(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1.');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low.');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high.');
    }
}

function displayGuess(guess) {
    userInput.value = ''; // clearing input
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Fixed h2 tag
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`; // Fix id placement
    startOver.appendChild(p);
    playGame = false; // Properly assign boolean
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (el) {
        randomNumber = Math.floor(Math.random() * 100 + 1); // Corrected Math.floor
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true; // Properly assign boolean
    });
}
