var warning = document.getElementById('warning');
var hangman = document.getElementById('hangman');
var guessWrong = document.getElementById('guessWrong');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var guessRemaining = document.getElementById('guessRemaining');

// Word Bank
var words = ['pancake', 'waffle', 'sausage', 'eggs', 'omelette', 'muffin', 'bagel', 'toast', 'bacon', 'yogurt', 'oatmeal', 'grits', 'cereal', 'biscuit', 'croissant', 'juice', 'strawberry', 'blueberry', 'blackberry', 'raspberry'];
// Transforms words to uppercase
for (var u = 0; u < words.length; u++) {
    words[u] = words[u].toUpperCase();
}

// Choose word randomly based on items in food array
var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];

// Underscores based on word length
var placeholderArray = [];
for (var i = 0; i < randomWord.length; i++) {
    placeholderArray[i] = '<div class="hangman-letters"><span>' + randomWord[i] + '</span></div>';
    for (var j = 0; j < placeholderArray.length; j++) {
        var blockLetters = placeholderArray[j] + ' ';
    }
    hangman.innerHTML += blockLetters;
}

// Initialize game
function game() {
    var guessLetter = document.getElementById('guessLetter').value;
    var inputLetter = guessLetter.toUpperCase();
    var remainingLetters = randomWord.length;
    var wrongArray = [];

    // prevents page from refreshing on submit
    event.preventDefault();

    // check input is a letter - not a number or symbol
    if (!/^([A-Z])$/.test(inputLetter)) {
        warning.innerHTML = 'Please enter a letter.';
        guessWrong.innerHTML = inputLetter; //for testing
    } else {
        warning.innerHTML = '';

        // if wrong - Push incorrect letters to wrong-array
        /* if () {

        } */
        guessWrong.innerHTML = inputLetter; // for testing


        // if correct - Push correct letters to replace that underscore



    }

}

// Restart game



console.log(randomWord); //for testing
console.log(placeholderArray); //for testing