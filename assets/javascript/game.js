//Arrays and variables
var log = console.log;
var words = ["amalfi", "bologna", "capri", "como", "florence", "milan", "pisa", "portofino", "positano", "ravello", "rome", "sorrento", "tuscany", "venice", "verona"];
var wordSelector = "";
var wordLetters = [];
var wordLength = 0;
var correctLetters = [];
var incorrectLetters = [];
var guessesRemaining = 9;
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
//     var wordSelect = Math.floor(Math.random()*words.length);
// var pickRandomWord = words[wordSelect];
    wordSelector = words[Math.floor(Math.random() * words.length)];
    wordLetters = wordSelector.split("");
    wordLength = wordLetters.length;

    guessesRemaining = 9;
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


    function italyImage () {
        if (wordSelector.toString() === words[0]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Amalfi.jpg">';
        }
        else if (wordSelector.toString() === words[1]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Bologna.jpg">';
        }
        else if (wordSelector.toString() === words[2]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Capri.jpg">';
        }
        else if (wordSelector.toString() === words[3]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Como.jpg">';
        } 
        else if (wordSelector.toString() === words[4]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Florence.jpg">';
        } 
        else if (wordSelector.toString() === words[5]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Milan.jpg">';
        } 
        else if (wordSelector.toString() === words[6]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Pisa.jpg">';
        } 
        else if (wordSelector.toString() === words[7]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Portofino.jpg">';
        } 
        else if (wordSelector.toString() === words[8]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Positano.jpg">';
        } 
        else if (wordSelector.toString() === words[9]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Ravello.jpg">';
        } 
        else if (wordSelector.toString() === words[10]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Rome.jpg">';
        } 
        else if (wordSelector.toString() === words[11]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Sorrento.jpg">';
        } 
        else if (wordSelector.toString() === words[12]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Tuscany.jpeg">';
        } 
        else if (wordSelector.toString() === words[13]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Venice.jpg">';
        } 
        else if (wordSelector.toString() === words[14]) {
            document.getElementById("image").innerHTML = '<img src="assets/images/Verona.png">';
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

            italyImage ();
            gameStarter ();
        }

        else if (guessesRemaining === 0) {
            alert("You lose!");

            gameStarter ();
        }
}

gameStarter ();





