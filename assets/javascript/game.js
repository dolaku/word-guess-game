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
var lettersArray = [];

// Transforms words to uppercase
for (var u = 0; u < words.length; u++) {
    words[u] = words[u].toUpperCase();
}

// Choose word randomly based on items in food array
var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];
var randomWordSplit = randomWord.split('');

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
function game() {
    var inputLetter = document.getElementById('guessLetter').value.toUpperCase();
    var remainingLetters = randomWord.length;
    var wrongArray = [];
    var wrongPlaceholder = [];

    // prevents page from refreshing on submit
    event.preventDefault();

    // check input is a letter - not a number or symbol
    if (!/^([A-Z])$/.test(inputLetter)) {
        warning.innerHTML = 'Please enter a letter.';
    } else {
        warning.innerHTML = '';

        // loop through each letter
        for (var x = 0; x < randomWordSplit.length; x++) {
            if (inputLetter !== randomWordSplit[x]) {
                //  - Push incorrect letters to wrong-array
               /*  wrongArray.push(inputLetter);
                for (var y = 0; y < wrongArray.length; y++) {
                    wrongPlaceholder[y] = '<div class="wrong-letters"><span>' + wrongArray[y] + '</span></div>';
                    for (var z = 0; z < wrongPlaceholder.length; z++) {
                        var wrongBlockLetters = wrongPlaceholder[z];
                    }
                    guessWrong.innerHTML = wrongBlockLetters; */
                    console.log(inputLetter + ' not found------------');

            } else if (inputLetter === randomWordSplit[x]) {
                console.log(randomWordSplit[x]);
                console.log(randomWordSplit.indexOf(inputLetter));
                var identifiedLetter = document.getElementById(x);
                identifiedLetter.style.cssText = 'display: inline-block';
            }
        }


            //  - Check if letter was already guessed
            //  - Decrease guessRemCount



        // if correct - Push correct letters to replace that underscore



    }

}

// Restart game



console.log(randomWord); //for testing
console.log(randomWordSplit); //for testing