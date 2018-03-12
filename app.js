var home = document.getElementById('game-start');
var game = document.getElementById('game');
var gameOver = document.getElementById('game-over');
var buttonHome = document.querySelector('#game-start button');
var buttonGameOver = document.querySelector('#game-over button');
var answers = document.querySelectorAll('.flag img');
var answerName = document.getElementById('countriesName');
var answer = {};
var lives = document.querySelectorAll('.lives img');
var score = document.querySelector('.score strong');
var timer = document.querySelector('.time span');
var counterTimer = 20;


/*
var prenoms = ['ariel', 'thomas', 'vincent']
var filtered = prenoms.filter(function(obj){
  return obj.indexOf('a') > -1
});
console.log(filtered);
*/




window.addEventListener('load', function() {
  runGame();
  setClock();
})

buttonHome.addEventListener('click', function() {
  home.classList.toggle('is-open');
  game.classList.toggle('is-open');
  answer = {};
  counterLives = 3;
  counterScore = 0;
  counterTimer = 20;
  lives.className = '';
});

buttonGameOver.addEventListener('click', function(){
  gameOver.classList.toggle('is-open');
  home.classList.toggle('is-open');
  for (var i = 0; i < lives.length; i++) {
    lives[i].classList.remove('is-active');
  }
});

function displayAnswerName() {
  answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
  countriesName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver
}

function displayAnswerFlag() {
  var randomAnswer = [Math.floor(Math.random()*4)];
  answers[randomAnswer].src = "flags/" + answer.code + ".svg";
}

function displayRandomFlag() {
  // Boucle qui ajoute les 4 drapeaux (choix de réponses)
  for (var i = 0; i < answers.length; i++) {
    var value = flags[Math.floor(Math.random()*flags.length-1)];
    if (answers[i].src.length === 0) {
      answers[i].src = "flags/" + value.code + ".svg";
    }
  }
}

function runGame() {
    displayAnswerName();
    displayAnswerFlag();
    displayRandomFlag();
    for (var i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        var verify = this.src[49] + this.src[50];
        if (verify === answer.code) {
          counterScore++;
          displaygame();
          if (counterTimer < 30) {
            counterTimer = counterTimer + 4;
          }
        } else if (answers[i].className != 'is-active') {
          answers[i].classList.add('is-active');
          removeLives();
        }
      });
    }
}

function removeLives() {
  counterLives--;
  lives[counterLives].classList.toggle('is-active');
  if (counterLives == 0) {
    game.classList.toggle('is-open');
    gameOver.classList.toggle('is-open');
  }
}

function clock(counterScore)  {
     if(counterTimer > 0) {
        score.textContent = counterScore;
        timer.textContent = counterTimer;
        counterTimer--;
     } else if (counterTimer == 0) {
        game.classList.remove('is-open');
        gameOver.classList.add('is-open');
        counterTimer--;
     }
};

function setClock() {
     intervalId = setInterval(clock, 1000);
};
