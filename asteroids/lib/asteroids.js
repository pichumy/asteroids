// import 'game_view';
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1000;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");
  window.ctx = ctx;
  let game = new Game();
  let game_viewer = new GameView(game, ctx);
  game_viewer.start();
  //ctx.fillStyle = "black";
  //ctx.fillRect(0,0,1000,600);
});

window.GameView = GameView;
window.Game = Game;
window.Asteroid = Asteroid;
window.MovingObject = MovingObject;
