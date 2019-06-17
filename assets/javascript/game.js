//Arrays and variables
var log = console.log;
var words = ["hawaii", "singapore", "thailand", "positano"];
var wordSelector = "";
var wordLetters = [];
var spaceHolders = 0;
var correctSpaceHolders = [];
var incorrectLetters = [];
var guessesRemaining = 6;
var wins = 0;

// //HTML display reference holder variables
// var directionsDisplay = document.getElementById("directions-text");
// var playerGuessDisplay = document.getElementById("playerGuess-text");
var guessesRemainingDisplay = document.getElementById("guessesRemaining-text");
// var lettersGuessedDisplay = document.getElementById("lettersGuessed-text");
var winsDisplay = document.getElementById("wins-text");
var correctSpaceHoldersDisplay = document.getElementById("correctSpaceHolders-text");

// //This function will run whenever the player presses a key


function gameStarter () {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    wordLetters = wordSelector.split("");
    spaceHolders = wordLetters.length;

    
    guessesRemaining = 6;
    incorrectLetters = [];
    correctSpaceHolders = [];

    for (var blanks=0; blanks<spaceHolders; blanks++) {
        correctSpaceHolders.push("_");
    }

    correctSpaceHoldersDisplay.textContent = correctSpaceHolders.join(" ");
    guessesRemainingDisplay.textContent = "Lives: " + guessesRemaining;
    winsDisplay.textContent = "Wins: " + wins;
    // lettersGuessedDisplay.textContent = 

    log(wordSelector);
    log(wordLetters);
    log(spaceHolders);
    log(correctSpaceHolders);

}

function guessChecker (letter) {
    var correctLetter = false;

    for (var i=0; i<spaceHolders; i++) {
        if (wordSelector[i] == letter) {
            correctLetter = true;
        }
    }

    if (correctLetter) {
        for (var i=0; i<spaceHolders; i++) {
            if (wordSelector[i] == letter) {
                correctSpaceHolders[i] = letter;
            }
        }
    }

    else {
        incorrectLetters.push[letter];
        guessesRemaining--;
    }
    log(correctSpaceHolders);
}

function newGame () {
    log("wins" + wins + "guesses left" + guessesRemaining);
}
gameStarter ();

document.onkeyup = function(event) {

    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessChecker(playerGuess);
    newGame ();

    log(playerGuess);

}








