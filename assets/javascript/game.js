//Arrays and variables
var log = console.log;
var words = ["Hawaii", "Singapore", "Thailand", "Positano"];
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
// var wordSpacesDisplay = document.getElementById("wordSpaces-text");
// var guessesRemainingDisplay = document.getElementById("guessesRemaining-text");
// var lettersGuessedDisplay = document.getElementById("lettersGuessed-text");
// var winsDisplay = document.getElementById("wins-text");

// //This function will run whenever the player presses a key
// document.onkeyup = function(event) {

//     var playerChoice = event.key;

// }

function gameStarter () {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    wordLetters = wordSelector.split("");
    spaceHolders = wordLetters.length;

    guessesRemaining = 6;
    incorrectLetters = [];
    correctSpaceHolders = [];

    log(wordSelector);
    log(wordLetters);
    log(spaceHolders);

}

gameStarter ();










