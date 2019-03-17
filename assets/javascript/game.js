// Word Bank
var words = ['pancake', 'waffle', 'sausage', 'eggs', 'omelette', 'muffin', 'bagel', 'toast', 'bacon', 'yogurt', 'oatmeal', 'grits', 'cereal', 'biscuit', 'croissant', 'juice', 'strawberry', 'blueberry', 'blackberry', 'raspberry'];
var warning = document.getElementById('warning');
var hangman = document.getElementById('hangman');
var guessWrong = document.getElementById('guessWrong');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var guessRemaining = document.getElementById('guessRemaining');
var winCount = 0;
var loseCount = 0;
var guessRemCount;
var placeholderArray = [];
var blockLetters = "";
var wrongArray = [];
var progressArray = [];

// Transforms words to uppercase
for (var u = 0; u < words.length; u++) {
    words[u] = words[u].toUpperCase();
}

// Choose word randomly based on items in food array
var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];
var randomWordSplit = randomWord.split('');

// Updates the blank spaces 
function updateDisplay() {    
    for (var i = 0; i < randomWord.length; i++) {
        blockLetters += placeholderArray[i];
    }

    win.innerHTML = winCount;
    hangman.innerHTML = blockLetters;
    guessWrong.innerHTML = wrongArray;
    guessRemaining.innerHTML = guessRemCount;
}

// Evaluates inputs
function evalInput() {
    var guessLetter = document.getElementById('guessLetter').value;
    var inputLetter = guessLetter.toUpperCase();

    // prevents page from refreshing on submit
    event.preventDefault();
    
    // check input is a capital letter - not a number or symbol
    if (!/^([A-Z])$/.test(inputLetter)) {
        warning.innerHTML = 'Please enter a letter.';
    } else {
        warning.innerHTML = '';
        
        var found = false;
        // loop through each letter to find matches
        for (var i = 0; i < randomWordSplit.length; i++) {
            if (inputLetter === randomWordSplit[i]) {
                var index = randomWordSplit.indexOf(inputLetter);
                if (inputLetter === randomWordSplit[index]) {
                    // if correct - Push correct letters to replace that underscore
                    placeholderArray[index] = '<div class="hangman-letters"><span>' + inputLetter + '</span></div>';
                    found = true;
                    updateDisplay();
                    console.log(inputLetter + ' found at position ' + index);
                }
                
            }
        }
        //  when the letter is incorrect
        if (!found) {
            console.log(inputLetter + ' not found');
            //  - Check if letter was already guessed
            //  - Push incorrect letters to wrong-array
            wrongArray.push(inputLetter);
            //  - Decrease guessRemCount
            // guessRemCount--;
            // updateDisplay(inputLetter);
        }
        if (guessRemaining === 0) {
            
        }
    }
}

// Start/Restart game
function startGame() {

    for (var i = 0; i < randomWord.length; i++) {
        placeholderArray.push('<div class="hangman-letters"><span> </span></div>');
    }

    // create guesses remaining depending # of letters + 3 extra guesses
    guessRemCount = randomWordSplit.length + 3;
    guessRemaining.innerHTML = guessRemCount;
    updateDisplay();
}

function checkWin() {
    if (x) {

        win++;
    }
}


startGame();

console.log(randomWord); //for testing
console.log(randomWordSplit); //for testing