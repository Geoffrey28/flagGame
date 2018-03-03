var home = document.getElementById('game-start');
var game = document.getElementById('game');
var gameOver = document.getElementById('game-over');
var buttonHome = document.querySelector('#game-start button');
var flags = document.querySelector('.flag');

buttonHome.addEventListener('click', function() {
  home.classList.toggle('is-open');
  game.classList.toggle('is-open');
});
