//Arrays and variables
var log = console.log;
var words = ["hawaii", "singapore", "thailand", "positano"];
var wordSelector = "";
var wordLetters = [];
var wordLength = 0;
var correctLetters = [];
var incorrectLetters = [];
var guessesRemaining = 6;
var wins = 0;

var guessesRemainingDisplay = document.getElementById("guessesRemaining-text");
var lettersGuessedDisplay = document.getElementById("lettersGuessed-text");
var winsDisplay = document.getElementById("wins-text");
var correctLettersDisplay = document.getElementById("correctLetters-text");


document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessChecker(playerGuess);
    newGame ();
}

function gameStarter () {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    wordLetters = wordSelector.split("");
    wordLength = wordLetters.length;

    guessesRemaining = 6;
    incorrectLetters = [];
    correctLetters = [];

    for (var blanks = 0; blanks < wordLength; blanks++) {
        correctLetters.push("_");
    }

    correctLettersDisplay.textContent = correctLetters.join(" ");
    lettersGuessedDisplay.textContent = "Incorrect Letters: " + incorrectLetters.join(" ");
    guessesRemainingDisplay.textContent = "Lives: " + guessesRemaining;
    winsDisplay.textContent = "Wins: " + wins;
}

function guessChecker (letter) {
    var correctLetter = false;

    for (var i = 0; i < wordLength; i++) {
        if (wordSelector[i] === letter) {
            correctLetter = true;
        }
    }

    if (correctLetter) {

        for (var i = 0; i < wordLength; i++) {
            if (wordSelector[i] === letter) {
                correctLetters[i] = letter;
            }
        }
    }

    else {
        incorrectLetters.push(letter);
        guessesRemaining--;
        }
    }

function newGame () {
    guessesRemainingDisplay.textContent = "Lives: " + guessesRemaining;
    correctLettersDisplay.textContent = correctLetters.join(" ");
    lettersGuessedDisplay.textContent = "Incorrect Letters: " + incorrectLetters.join(" ");

    if (wordLetters.toString() === correctLetters.toString()) {
        wins++;
        alert("You win!");
        
        winsDisplay.textContent = "Wins: " + wins;
 
        gameStarter ();
    }

    else if (guessesRemaining === 0) {
        alert("You lose!");

        gameStarter ();
    }
}

gameStarter ();






// function backgroundImage () {
//     document.body.style.backgroundImage = "url('assets/images/Positano.png')";
    
// }

// // Sets the background image
// const setBackground = (image) => {
//     document.body.style.background = "url('assets/images/Positano.png')";
//   };
//   if (isWeekend) {
//     setBackground('nature');
//   } else {
//     setBackground('pencils');
//   }




// if (wordSelector.toString() === words[3]) {
//     backgroundImage ();
//     document.body.style.backgroundImage = "url('assets/images/Positano.png')";
// }