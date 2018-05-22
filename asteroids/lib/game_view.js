//import Keymaster from 'keymaster';

function GameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function(){
  setInterval(this.game.step.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game,this.ctx), 20);
};

GameView.prototype.bindKeyHandlers = function(){

};

module.exports = GameView;
