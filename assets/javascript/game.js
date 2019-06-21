//Arrays and variables
var log = console.log;
var words = ["amalfi", "bologna", "capri", "como", "florence", "milan", "pisa", "pompeii", "portofino", "positano", "ravello", "rome", "sorrento", "tuscany", "venice", "verona"];
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


    function backgroundImage () {
        if (wordSelector.toString() === words[0]) {
            document.body.style.backgroundImage = "url('assets/images/Amalfi.jpeg')";
        }
        else if (wordSelector.toString() === words[1]) {
            document.body.style.backgroundImage = "url('assets/images/Bologna.jpg')";
        }
        else if (wordSelector.toString() === words[2]) {
            document.body.style.backgroundImage = "url('assets/images/Capri.jpg')";
        }
        else if (wordSelector.toString() === words[3]) {
            document.body.style.backgroundImage = "url('assets/images/Como.jpg')";
        } 
        else if (wordSelector.toString() === words[4]) {
            document.body.style.backgroundImage = "url('assets/images/Florence.jpg')";
        } 
        else if (wordSelector.toString() === words[5]) {
            document.body.style.backgroundImage = "url('assets/images/Milan.jpg')";
        } 
        else if (wordSelector.toString() === words[6]) {
            document.body.style.backgroundImage = "url('assets/images/Pisa.jpg')";
        } 
        else if (wordSelector.toString() === words[7]) {
            document.body.style.backgroundImage = "url('assets/images/Pompeii.jpg')";
        } 
        else if (wordSelector.toString() === words[8]) {
            document.body.style.backgroundImage = "url('assets/images/Portofino.jpg')";
        } 
        else if (wordSelector.toString() === words[9]) {
            document.body.style.backgroundImage = "url('assets/images/Positano.png')";
        } 
        else if (wordSelector.toString() === words[10]) {
            document.body.style.backgroundImage = "url('assets/images/Ravello.jpg')";
        } 
        else if (wordSelector.toString() === words[11]) {
            document.body.style.backgroundImage = "url('assets/images/Rome.jpg')";
        } 
        else if (wordSelector.toString() === words[12]) {
            document.body.style.backgroundImage = "url('assets/images/Sorrento.jpg')";
        } 
        else if (wordSelector.toString() === words[13]) {
            document.body.style.backgroundImage = "url('assets/images/Tuscany.jpg')";
        } 
        else if (wordSelector.toString() === words[14]) {
            document.body.style.backgroundImage = "url('assets/images/Venice.jpg')";
        } 
        else if (wordSelector.toString() === words[15]) {
            document.body.style.backgroundImage = "url('assets/images/Verona.jpg')";
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

            backgroundImage ();
            gameStarter ();
        }

        else if (guessesRemaining === 0) {
            alert("You lose!");

            gameStarter ();
        }
}

gameStarter ();





