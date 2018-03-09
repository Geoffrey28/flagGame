var gameStart = document.getElementById('game-start');
var game = document.getElementById('game');
var buttonStart = document.querySelector('#game-start button');
var countriesName = document.getElementById('countriesName');
var timer = document.querySelector('.time span');
var timerCounter = 20;
var lives = document.querySelectorAll('.lives');
var livesCounter = 3;

buttonStart.addEventListener('click', function() {
  initGame();
  swapPage();
  displayAnswerName();
  setClock();
  //sortingFlags(answer);
});

function initgame() {
  timerCounter = 20;
  livesCounter = 3;
}

function displayAnswerName() {
  answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
  countriesName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver
}

function removeLives() {
  counterLives--;
  lives[counterLives].classList.toggle('is-active');
  if (counterLives === 0) {
    swapPage();
  }
}

function swapPage() {
  if (gameStart.className === 'is-open') {
    gameStart.classList.toggle('is-open');
    game.classList.toggle('is-open');
  } else if (game.className === 'is-open') {
    game.classList.toggle('is-open');
    gameOver.classList.toggle('is-open');
  } else if (gameOver.className === 'is-open') {
    gameOver.classList.toggle('is-open');
    gameStart.classList.toggle('is-open');
  }
}

function clock(intervalID) {
  if (counterTimer > 0) {
    timer.textContent = counterTimer;
    counterTimer--;
  } else if (counterTimer <= 0) {
    swapPage();
    clearInterval(intervalID);
  }
}

function setClock() {
  var intervalID = setInterval(clock, 1000);
}






/*
function sortingFlags() {
  var filtered = flags.filter(function(obj) {
    if (obj.colors == answer.colors) {
      return true
    }
  });
  console.log(filtered);
}
*/
