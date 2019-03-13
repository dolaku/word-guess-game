var warning = document.getElementById('warning');
var hangman = document.getElementById('hangman');
var guessWrong = document.getElementById('guessWrong');

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
    placeholderArray[i] = '_';
    for (var j = 0; j < placeholderArray.length; j++) {
        var blankLetters = placeholderArray[j] + ' ';
    }
    hangman.innerHTML += blankLetters;
}

// Keep track of remaining letters
var remainingLetters = randomWord.length;

// Check if input is a letter with button
function getUserInput() {
    var guessLetter = document.getElementById('guessLetter').value;
    var inputLetter = guessLetter.toUpperCase();

    // prevents page from refreshing on submit
    event.preventDefault();

    //check input is a letter
    if (inputLetter != '/[^A-Z]/') {
        warning.innerHTML = 'Please enter a letter.';
        guessWrong.innerHTML = inputLetter;
    } else {
        warning.innerHTML = '';
        guessWrong.innerHTML = inputLetter;
    }

}
// Initialize game


// Check if guessed letter is correct


// Push correct letters onto underscores


// Push incorrect letters to wrong-array
var lettersWrong = [];

// Restart game



console.log(randomWord);
console.log(placeholderArray);