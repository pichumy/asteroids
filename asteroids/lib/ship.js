const Util = require('./utils');
const MovingObject = require('./moving_object');

const DEFAULTS = {
  COLOR: "blue",
  RADIUS: 8
};

function Ship(options){
  options = options || {};
  options.color = options.color || DEFAULTS.COLOR;
  options.radius = options.radius || DEFAULTS.RADIUS;
  options.pos = options.pos;
  options.vel = options.vel || [0,0];
  MovingObject.call(this, options);

}

Ship.prototype.relocate = function(){
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
};

Ship.prototype.power = function(impulse){
  [this.vel[0], this.vel[1]] = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};


Util.inherits(Ship, MovingObject);

module.exports = Ship;
