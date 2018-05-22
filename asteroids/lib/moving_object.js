function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}


MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  [this.pos[0], this.pos[1]] = this.game.wrap([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  return distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius);
};

MovingObject.prototype.collideWith = function(otherObject) {
  // this.game.remove(this);
  // this.game.remove(otherObject);
}

function distance(pos1, pos2) {
  return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);
}

module.exports = MovingObject;
