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
var placeholderArray = [];
var allGuessesArray = [];

// Transforms words to uppercase
for (var u = 0; u < words.length; u++) {
    words[u] = words[u].toUpperCase();
}

// Choose word randomly based on items in food array
var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];
var randomWordSplit = randomWord.split('');
var remainingLetters = randomWord.length;

// Blank spaces based on word length
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

// Evaluates input
function evalInput() {
    var inputLetter = document.getElementById('guessLetter').value.toUpperCase();
    var wrongArray = [];
    var wrongPlaceholder = [];
    var found = false;

    // prevents page from refreshing on submit
    event.preventDefault();

    // check input is a letter - not a number or symbol
    if (!/^([A-Z])$/.test(inputLetter)) {
        warning.innerHTML = 'Please enter a letter.';
    } else {
        warning.innerHTML = '';
        allGuessesArray.push(inputLetter);

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
        
        checkWin();
    }

    // incorrect guess
    if (!found) {

    }

        //  - Decrease guessRemCount
        //  - Check if letter was already guessed

}

function checkWin() {
    if (remainingLetters === 0) {
        console.log('You win!');
    }
}


// Restart game



console.log(randomWord); //for testing
console.log(randomWordSplit); //for testing