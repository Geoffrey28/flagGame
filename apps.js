var gameStart = document.getElementById('game-start');
var game = document.getElementById('game');
var gameOver = document.getElementById('game-over');
var buttonStart = document.querySelector('#game-start button');
var countriesName = document.getElementById('countriesName');
var timer = document.querySelector('.time span');
var timerCounter = 20;
var lives = document.querySelectorAll('.lives');
var livesCounter = 3;
var score = document.querySelector('.score');
var scoreCounter = 0;
var answers = document.querySelectorAll('.flag');

buttonStart.addEventListener('click', function() {
  swapPage();
  displayAnswerName();
  setClock();
});

function displayAnswerName() {
  answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
  countriesName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver
}

function displayAnswerFlag() {
  var randomAnswer = [Math.floor(Math.random()*4)];
  answers[randomAnswer].src = "flags/" + answer.code + ".svg";
}
/*
function displayRandomFlag() {
  for (var i = 0; i < answers.length; i++) {
    answers[i]
  }
}*/

function displayScore() {
  score.textContent = counterScore;
}

function removeLives() {
  counterLives--;
  lives[counterLives].classList.toggle('is-active');
  if (counterLives === 0) {
    swapPage();
  }
}

function swapPage() {
  if (gameStart.className == 'is-open') {
    gameStart.classList.toggle('is-open');
    game.classList.toggle('is-open');
  } else if (game.className == 'is-open') {
    game.classList.toggle('is-open');
    gameOver.classList.toggle('is-open');
  } else if (gameOver.className == 'is-open') {
    gameOver.classList.toggle('is-open');
    gameStart.classList.toggle('is-open');
  }
}

function clock(intervalID) {
  if (timerCounter > 0) {
    timer.textContent = timerCounter;
    timerCounter--;
  } else if (timerCounter <= 0) {
    swapPage();
    clearInterval(intervalID);
  }
}

function setClock() {
  var intervalID = setInterval(clock, 1000);
}
