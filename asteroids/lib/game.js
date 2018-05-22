const Asteroid = require('./asteroid.js');
const Ship = require('./ship'); 

function Game(){
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.ship = this.buildShip();
  this.addAsteroids();
}

Game.prototype.buildShip = function(){
  let randomX = this.randomPosition(this.DIM_X);
  let randomY = this.randomPosition(this.DIM_Y);
  let new_ship = new Ship({pos: [randomX, randomY], game: this});
  return new_ship;
};

Game.prototype.allObjects = function(){
  return this.asteroids.concat([this.ship]);
};

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < this.NUM_ASTEROIDS) {
    let randomX = this.randomPosition(this.DIM_X);
    let randomY = this.randomPosition(this.DIM_Y);
    let new_asteroid = new Asteroid({pos: [randomX, randomY], game: this});
    this.asteroids.push(new_asteroid);
  }
};


Game.prototype.randomPosition = function(max) {
  return Math.random() * Math.floor(max);
};

Game.prototype.checkCollisions = function() {
  this.allObjects().forEach(function(asteroid, idx, array){
    for(let i = 0; i < array.length; i++) {
      if (i != idx && asteroid.isCollidedWith(array[i])) {
        asteroid.collideWith(array[i]);
      }
    }
  });
};

Game.prototype.remove = function(asteroid) {
  let asteroid_index = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(asteroid_index, 1);
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,1000,600);
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,1000,600);

  this.allObjects().forEach(asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(asteroid => asteroid.move());
};

Game.prototype.wrap = function(pos) {
  if (pos[0] > this.DIM_X) {
    pos[0] = 0;
  } else if (pos[0] < 0) {
    pos[0] = this.DIM_X;
  }

  if (pos[1] > this.DIM_Y) {
    pos[1] = 0;
  } else if (pos[1] < 0) {
    pos[1] = this.DIM_Y;
  }

  return pos;
};


module.exports = Game;
