// Word Bank
var words = ['pancake', 'waffle', 'sausage', 'eggs', 'omelette', 'muffin', 'bagel', 'toast', 'bacon', 'yogurt', 'oatmeal', 'grits', 'cereal', 'biscuit', 'croissant', 'juice', 'strawberry', 'blueberry', 'blackberry', 'raspberry'];
var warning = document.getElementById('warning');
var hangman = document.getElementById('hangman');
var guessWrong = document.getElementById('guessWrong');
var inputGuess = document.getElementById('guessLetter');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var guessRemaining = document.getElementById('guessRemaining');
var winCount = 0;
var loseCount = 0;
var placeholderArray = [];
var allGuessesArray = [];

// Transforms words to uppercase
for (var u = 0; u < words.length; u++) {
    words[u] = words[u].toUpperCase();
}

// Start/Restart game
document.getElementById('resetButton').addEventListener('click', function(event) {
    // prevents page from refreshing on submit && clears input field
    event.preventDefault();

    startGame();
});

document.getElementById('guessButton').addEventListener('click', function(event) {
    // prevents page from refreshing on submit && clears input field
    event.preventDefault();

    evalInput();
});

function startGame() {
    hangman.innerHTML = '';
    guessWrong.innerHTML = '';

    genRandomWord();
    buildWord();
    evalInput();
    console.log(randomWord); //for testing
    console.log(randomWordSplit); //for testing
}

// Choose word randomly based on items in food array
var randomWord;
var randomWordSplit;
var remainingLetters;

function genRandomWord() {
    var randomNum = Math.floor(Math.random() * words.length);
    randomWord = words[randomNum];
    randomWordSplit = randomWord.split('');
    remainingLetters = randomWord.length;
}

// Blank spaces based on word length
function buildWord() {
    for (var i = 0; i < randomWord.length; i++) {
        placeholderArray[i] = '<div class="hangman-letters"><span id="' + i + '">' + randomWord[i] + '</span></div>';
        for (var j = 0; j < placeholderArray.length; j++) {
            var blockLetters = placeholderArray[j] + ' ';
        }
        hangman.innerHTML += blockLetters;

        // create guesses remaining depending on length of word
        guessRemCount = randomWordSplit.length + 3;
        guessRemaining.innerHTML = guessRemCount;
    }
}

// Evaluates input
function evalInput() {
    var inputLetter = inputGuess.value.toUpperCase();
    var wrongArray = [];
    var wrongPlaceholder = [];
    var found = false;

    inputGuess.value = '';
    inputGuess.focus();


    // check input is a letter - not a number or symbol
    if (!/^([A-Z])$/.test(inputLetter)) {
        warning.innerHTML = 'Please enter a letter.';
    } else {
        warning.innerHTML = '';

        // check if letter was already entered
        allGuessesArray.push(inputLetter);
        if (allGuessesArray.indexOf(inputLetter) < 0) {
            guessWrong.innerHTML = allGuessesArray;
            console.log('first time seeing ' + inputLetter);
        }
        
        // loop through each letter
        for (var x = 0; x < randomWordSplit.length; x++) {
            if (inputLetter === randomWordSplit[x]) {
                // if correct - display that letter
                var identifiedLetter = document.getElementById(x);
                identifiedLetter.style.cssText = 'display: inline-block';
                remainingLetters--;
                console.log(remainingLetters + ' still hidden');
                found = true;
            } else {
                found = false;
            }
        }

        console.log(found);
        // incorrect guesses displays wrong letters && updates stats
        if (!found) {
            // Decrease guessRemCount
            guessRemCount--;
            guessRemaining.innerHTML = guessRemCount;
            console.log(inputLetter + ' not found');
        }

        checkWin();
        checkLose();
    }   
}

// win & lose functions updates stats and resets game
function checkWin() {
    if (remainingLetters === 0) {
        winCount++;
        win.innerHTML = winCount;
        console.log('You win!');
        startGame();
    }
}

function checkLose() {
    if (guessRemCount === 0) {
        loseCount++;
        console.log('You lose!');
        startGame();
    }
}

startGame();