//
// Function.prototype.inherits = function(SuperClass){
//   let Subclass = this;
//   function Surrogate(){}
//   Surrogate.prototype = SuperClass.prototype;
//   Subclass.prototype = new Surrogate();
//   Subclass.prototype.constructor = Subclass;
// };
Function.prototype.inherits = function(Superclass){
  let Subclass = this;
  Subclass.prototype = Object.create(Superclass.prototype);
  Subclass.prototype.constructor = Subclass; 
};

function MovingObject(){
}

MovingObject.prototype.doStuff = () => {
  console.log("pew pew");
};

function Ship(){}
Ship.inherits(MovingObject);

function Asteroid(){}
Asteroid.inherits(MovingObject);

let boat = new Ship();
boat.doStuff();

let rock = new Asteroid();
rock.doStuff();
