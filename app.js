var home = document.getElementById('game-start');
var flagFinder = document.getElementById('flagFinder');
var gameOver = document.getElementById('game-over');
var buttonHome = document.querySelector('#game-start button');
var buttonGameOver = document.querySelector('#game-over button');
var answers = document.querySelectorAll('.flag img');
var answerName = document.getElementById('countriesName');
//var answer = {};
var lives = document.querySelectorAll('.lives img');
var counterLives = 3;
var score = document.querySelector('.score strong');
var counterScore = 0;
var timer = document.querySelector('.time span');
var counterTimer = 20;

window.onload = runGame(); setClock();

buttonHome.addEventListener('click', function() {
  home.classList.toggle('is-open');
  flagFinder.classList.toggle('is-open');
  answer = {};
  counterLives = 3;
  counterScore = -1;
  counterTimer = 20;
  lives.className = '';
  displayFlagFinder();
  addScore();
});

buttonGameOver.addEventListener('click', function(){
  gameOver.classList.toggle('is-open');
  home.classList.toggle('is-open');
  for (let i = 0; i < lives.length; i++) {
    lives[i].classList.remove('is-active');
  }
});

function displayFlagFinder() {

    answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
    answerName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver
    // Boucle qui ajoute les 4 drapeaux (choix de réponses)
    for (var i = 0; i < answers.length; i++) {
      var value = flags[Math.floor(Math.random()*flags.length+1)];
      do {
        var value = flags[Math.floor(Math.random()*flags.length+1)];
      } while (value.code === answer.code);
      answers[i].src = "flags/" + value.code + ".svg";
    }
    // Ajoute le pays à trouver parmi les 4 propositions
    var randomAnswer = [Math.floor(Math.random()*4)];
    answers[randomAnswer].src = "flags/" + answer.code + ".svg";

}

function runGame() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        var verify = this.src[49] + this.src[50];
        if (verify === answer.code) {
          addScore();
          displayFlagFinder();
          if (counterTimer < 30) {
            counterTimer = counterTimer + 4;
          }
        } else {
          answers[i].classList.add('is-active');
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
    flagFinder.classList.toggle('is-open');
    gameOver.classList.toggle('is-open');
  }
}

function clock()  {
     if(counterTimer > 0) {
        timer.textContent = counterTimer;
        counterTimer--;
     } else if (counterTimer == 0) {
        //clearInterval(intervalId)
        flagFinder.classList.remove('is-open');
        gameOver.classList.add('is-open');
        counterTimer--;
     }
};

function setClock(){
     intervalId = setInterval(clock, 1000);
};
