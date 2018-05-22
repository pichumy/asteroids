const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

const DEFAULTS = {
   COLOR: "red",
   RADIUS: 10
};

function Asteroid(options){
  options = options || {};
  options.color = options.color || DEFAULTS.COLOR;
  options.radius = options.radius || DEFAULTS.RADIUS;
  options.pos = options.pos;
  options.vel = options.vel || Util.randomVec(options.radius);
  MovingObject.call(this, options);

}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject){
  if (otherObject instanceof Ship){
    otherObject.relocate();
  } 
};


module.exports = Asteroid;
