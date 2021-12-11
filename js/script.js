"use strict";
var shuffleWordsArray = shuffle(words);
var word = shuffleWordsArray.pop();

var alphabetBtns = document.getElementById("alphabet-buttons");
var selectedWord = document.getElementById("selected-word");
var container = document.getElementById("container");
var score = document.getElementById("score");


var numberOfGuesses = 0;
var guesses = [];
var keepScore = [];
var gamesRight = 0;
var lives = 11;

function getEventTarget(e) {
  return e.target;
}

function createButtons() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (var i = 0; i < alphabet.length; i++) {
    alphabetBtns.innerHTML =
      alphabetBtns.innerHTML + "<li>" + alphabet[i] + "</li>";
  }
}

function createWordPlaceholder() {
  for (var i = 0; i < word.length; i++) {
    selectedWord.innerHTML = selectedWord.innerHTML + "_";
  }
}

function evaluateGuess() {
  var guess = keepScore.pop();
  var gameOverText =
    "<h2>Game Over</h2><p>The correct word was: <span id='answer'></span></p><a id='play-again' href='#'>Play Again?</a>";

  if (word.indexOf(guess) > -1) {
  } else if (lives <= 11 && lives > 0) {
    lives--;
    drawHangman();
  } else {
  
    container.innerHTML = gameOverText;
    var answer = document.getElementById("answer");
    answer.innerHTML = word;
    var playAgain = document.getElementById("play-again");
    playAgain.onclick = function(e) {
      e.preventDefault();
      location.reload();
    };
  }
}

function guess() {
  alphabetBtns.onclick = function(event) {
    var target = getEventTarget(event);
 
    if (event.target.tagName.toLowerCase() === "li") {
      var guess = target.innerText;
      target.setAttribute("class", "active");
      // disable click event after guess is selected
      target.style.pointerEvents = "none";
      guesses.push(guess);
      keepScore.push(guess);

      numberOfGuesses++;
      score.innerHTML = numberOfGuesses;
      maskWord();
      evaluateGuess();
    }
  };
}

function startGame() {
  createButtons();
  createWordPlaceholder();
  guess();
}

function maskWord() {
  
  var guessString = guesses.join("");
  var regexp = new RegExp("[^" + guessString + "]", "g");
  var display = word.replace(regexp, "_");
  var winnerText =
    "<h2>You Got it Right! The word was <span id='answer'></span></h2><a id='play-again' href='#'>Play Again?</a>";

  for (var i = 0; i < word.length; i++) {

    selectedWord.innerHTML = display;

    if (word == display) {
      setTimeout(function() {
        container.innerHTML = winnerText;
        var answer = document.getElementById("answer");
        answer.innerHTML = word;
        var playAgain = document.getElementById("play-again");
        playAgain.onclick = function(e) {
          e.preventDefault();
          location.reload();
        };
      }, 900);
    }
  }

  if (word == display) {
    return gamesRight++;
  }
}

startGame();