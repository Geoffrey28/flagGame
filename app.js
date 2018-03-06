var home = document.getElementById('game-start');
var game = document.getElementById('game');
var gameOver = document.getElementById('game-over');
var buttonHome = document.querySelector('#game-start button');
var buttonGameOver = document.querySelector('#game-over button');
var answers = document.querySelectorAll('.flag img');
var answerName = document.getElementById('countriesName');
var answer = {};
var lives = document.querySelectorAll('.lives img');
var counterLives = 3;
var score = document.querySelector('.score strong');
var counterScore = 0;
var timer = document.querySelector('.time span');

buttonHome.addEventListener('click', function() {
  home.classList.toggle('is-open');
  game.classList.toggle('is-open');
  answer = {};
  counterLives = 3;
  counterTimer = 20;
  counterScore = -1;
  lives.className = '';
  displayFlag();
  runGame();
  addScore();
});

buttonGameOver.addEventListener('click', function(){
  gameOver.classList.toggle('is-open');
  home.classList.toggle('is-open');
  for (let i = 0; i < lives.length; i++) {
    lives[i].classList.toggle('is-active');
  }
});



function displayFlag() {
    answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
    answerName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver

    // Boucle qui ajoute les 4 drapeaux (choix de réponses)
    for (let i = 0; i < answers.length; i++) {
      var value = flags[Math.floor(Math.random()*flags.length+1)];
      answers[i].src = "flags/" + value.code + ".svg";
    }
    // Ajoute le pays à trouver parmi les 4 propositions
    var randomAnswer = [Math.floor(Math.random()*4)];
    answers[randomAnswer].src = "flags/" + answer.code + ".svg";
}

function compareArray() {
  if (answer.color.length != value.color.length) {
    console.log(this.color);
  } /*else {
    for (var a = 0; a < a1.length; ++a) {
      if (a1[a] != a2[a]) {
        return false;
      }
    }
  }*/
  return true;
}

function runGame() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        var verify = this.src[49] + this.src[50];
        if (verify === answer.code) {
          addScore();
          displayFlag();
        } else {
          removeLives();
        }
      });
    }
}

function addScore() {
  counterScore++;
  score.textContent = counterScore;
}

function removeLives() {
  counterLives--;
  lives[counterLives].classList.toggle('is-active');
  if (counterLives == 0) {
    game.classList.toggle('is-open');
    gameOver.classList.toggle('is-open');
  }
}




























/*  // affiche 4 drapeaux aléatoires.
for (var i = 0; i < answers.length; i++) {
var value = flags[Math.floor(Math.random()*102)];
if (value[i] === value[i]-1) {
var value = flags[Math.floor(Math.random()*102)];
} else {
answers[i].src = "flags/" + value.code + ".svg";
}
}

// Affiche le nom du pays à trouver.
for (var i = 0; i < flags.length; i++) {
var countrieCode = value.code;
answerName.textContent = flags[i].name;
console.log(flags[i].name);
}

for (var i = 0; i < answers.length; i++) {
answers[i].addEventListener('click', function() {
if (countrieName === countriesName.textContent) {
console.log('win');
}
});
} */
