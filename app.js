var home = document.getElementById('game-start');
var game = document.getElementById('game');
var buttonHome = document.querySelector('#game-start button');
var answers = document.querySelectorAll('.flag img');
var answerName = document.getElementById('countriesName');

buttonHome.addEventListener('click', function() {
  home.classList.toggle('is-open');
  game.classList.toggle('is-open');
  displayFlag();
  runGame();
});

function displayFlag() {
    var answer = flags[Math.floor(Math.random()*102)]; // Choisi un pays au hasard dans la liste
    answerName.textContent = answer.name;  // Fais apparaître le nom du pays à trouver

    // Boucle qui ajoute les 4 drapeaux (choix de réponses)
    for (var i = 0; i < answers.length; i++) {
      var value = flags[Math.floor(Math.random()*flags.length)];
      answers[i].src = "flags/" + value.code + ".svg";
      console.log(answers[i]);
    }
    // Ajoute le pays à trouver parmi les 4 propositions
    var randomAnswer = [Math.floor(Math.random()*4)];
    answers[randomAnswer].src = "flags/" + answer.code + ".svg";
}

function runGame() {
    for (var i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        var verifyAnswer = this.src[49] + this.src[50];
        if (verifyAnswer === answer.code) {
          console.log('win');
        } else {
          console.log('lose');
        }
      });
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
