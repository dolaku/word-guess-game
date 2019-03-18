document.addEventListener("DOMContentLoaded", function () {

    // Word Bank
    var words = ['pancake', 'waffle', 'sausage', 'eggs', 'omelette', 'muffin', 'bagel', 'toast', 'bacon', 'yogurt', 'oatmeal', 'grits', 'cereal', 'biscuit', 'croissant', 'juice', 'strawberry', 'blueberry', 'blackberry', 'raspberry'];
    var warning = document.getElementById('warning');
    var hangman = document.getElementById('hangman');
    var guessWrong = document.getElementById('guessWrong');
    var inputGuess = document.getElementById('guessLetter');
    var win = document.getElementById('win');
    var lose = document.getElementById('lose');
    var guessRemaining = document.getElementById('guessRemaining');
    var messageCard = document.getElementById('messageCard');
    var endMessage = document.getElementById('endMessage');
    var hiddenWord = document.getElementById('hiddenWord');
    var pressStart = document.getElementById('pressStart');
    var winCount = 0;
    var loseCount = 0;
    var placeholderArray = [];
    var randomWord;
    var randomWordSplit;
    var identifiedLetter;
    var remainingLetters;
    var allGuessesArray = [];
    var wrongArray = [];
    


    // Start/Restart game
    function startGame() {
        hangman.innerHTML = '';
        guessWrong.innerHTML = '';
        allGuessesArray = [];
        wrongArray = [];

        // Transforms words to uppercase
        for (var u = 0; u < words.length; u++) {
            words[u] = words[u].toUpperCase();
        }

        genRandomWord();
        buildWord();
        evalInput();
        
        console.log(randomWord); //for testing
        console.log(randomWordSplit); //for testing
    }


    // Choose word randomly based on items in food array
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

        inputGuess.value = '';
        inputGuess.focus();

        // check input is a letter - not a number or symbol
        if (!/^([A-Z])$/.test(inputLetter)) {
            warning.innerHTML = 'Please enter a letter.';
        } else {
            warning.innerHTML = '';

            // check if letter is unique or is a duplicate entry
            if (!allGuessesArray.includes(inputLetter)) {
                allGuessesArray.push(inputLetter);
                // loop through each letter
                for (var i = 0; i < randomWordSplit.length; i++) {
                    if (inputLetter === randomWordSplit[i]) {
                        // if correct - display that letter
                        identifiedLetter = document.getElementById(i);
                        identifiedLetter.style.cssText = 'display: inline-block';
                        remainingLetters--;
                    }
                }

                // incorrect guesses - check if input letter is not in the hidden word array
                if (randomWordSplit.indexOf(inputLetter) < 0) {
                    console.log('wrong letter');
                    wrongArray.push(inputLetter);
                    //update guess count and display
                    guessRemCount--;
                    guessRemaining.innerHTML = guessRemCount;
                }

                // incorrect guesses displays wrong letters && updates stats
                guessWrong.innerHTML = wrongArray.sort();
            } else {
                warning.innerHTML = 'Please enter a new letter.';
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
            endMessage.innerHTML = 'You Win! YUM';
            hiddenWord.innerHTML = 'Breakfast was ' + randomWord;
            pressStart.innerHTML = 'Press the Up Arrow <i class="fas fa-arrow-alt-circle-up"></i> to play again!';
            messageCard.style.cssText = 'top: 26%';
            startGame();
        }
    }

    function checkLose() {
        if (guessRemCount === 0) {
            loseCount++;
            lose.innerHTML = loseCount;
            endMessage.innerHTML = 'Not Hungry?';
            hiddenWord.innerHTML = 'Breakfast was ' + randomWord;
            pressStart.innerHTML = 'Press the Up Arrow <i class="fas fa-arrow-alt-circle-up"></i> to play again!';
            messageCard.style.cssText = 'top: 26%';
            startGame();
        }
    }

    
    //--------- Prevents page from refreshing
    // on submit for Guess && reset buttons
    document.getElementById('resetButton').addEventListener('click', function (e) {
        e.preventDefault();

        startGame();
    });
    document.getElementById('guessButton').addEventListener('click', function (e) {
        e.preventDefault();

        evalInput();
    });
    // on Enter key
    window.addEventListener('keydown', function (e) {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
            if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
                e.preventDefault();
                return false;
            }
        }
    }, true);
    //------------------------------------------

    // When enter key is pressed, synthesize clicking the Guess button
    document.getElementById("guessLetter").addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("guessButton").click();
        }
    });

    // Start game when user presses spacebar
    document.onkeyup = function(e) {
        if (e.keyCode === 38) {
            messageCard.style.cssText = 'top: -100%';
            document.getElementById('resetButton').style.cssText = 'visibility: visible';
            startGame();
        }
    }

});