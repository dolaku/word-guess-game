var guessLetter = document.getElementById('guessLetter').nodeValue;

// Word Bank
var words = ['pancake', 'waffle', 'sausage', 'eggs', 'omelette', 'muffin', 'bagel', 'toast', 'bacon', 'yogurt', 'oatmeal', 'grits', 'cereal', 'biscuit', 'croissant', 'juice', 'strawberry', 'blueberry', 'blackberry', 'raspberry'];

// Choose word randomly based on items in food array
var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];

// Create underscores based on word length
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = '_';
}

// Keep track of remaining letters
var remainingLetters = randomWord.length;

// Check if input is a letter
function userInput() {
    
}

// Check if guessed letter is correct


// Push correct letters onto underscores


// Push incorrect letters to wrong-array
var lettersWrong = [];

// Restart game



console.log(randomWord);
console.log(answerArray);