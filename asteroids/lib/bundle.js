/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n\nconst DEFAULTS = {\n   COLOR: \"red\",\n   RADIUS: 10\n};\n\nfunction Asteroid(options){\n  options = options || {};\n  options.color = options.color || DEFAULTS.COLOR;\n  options.radius = options.radius || DEFAULTS.RADIUS;\n  options.pos = options.pos;\n  options.vel = options.vel || Util.randomVec(options.radius);\n  MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject){\n  if (otherObject instanceof Ship){\n    otherObject.relocate();\n  } \n};\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import 'game_view';\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 600;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  window.ctx = ctx;\n  let game = new Game();\n  let game_viewer = new GameView(game, ctx);\n  game_viewer.start();\n  //ctx.fillStyle = \"black\";\n  //ctx.fillRect(0,0,1000,600);\n});\n\nwindow.GameView = GameView;\nwindow.Game = Game;\nwindow.Asteroid = Asteroid;\nwindow.MovingObject = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./lib/ship.js\"); \n\nfunction Game(){\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 10;\n  this.asteroids = [];\n  this.ship = this.buildShip();\n  this.addAsteroids();\n}\n\nGame.prototype.buildShip = function(){\n  let randomX = this.randomPosition(this.DIM_X);\n  let randomY = this.randomPosition(this.DIM_Y);\n  let new_ship = new Ship({pos: [randomX, randomY], game: this});\n  return new_ship;\n};\n\nGame.prototype.allObjects = function(){\n  return this.asteroids.concat([this.ship]);\n};\n\nGame.prototype.addAsteroids = function() {\n  while (this.asteroids.length < this.NUM_ASTEROIDS) {\n    let randomX = this.randomPosition(this.DIM_X);\n    let randomY = this.randomPosition(this.DIM_Y);\n    let new_asteroid = new Asteroid({pos: [randomX, randomY], game: this});\n    this.asteroids.push(new_asteroid);\n  }\n};\n\n\nGame.prototype.randomPosition = function(max) {\n  return Math.random() * Math.floor(max);\n};\n\nGame.prototype.checkCollisions = function() {\n  this.allObjects().forEach(function(asteroid, idx, array){\n    for(let i = 0; i < array.length; i++) {\n      if (i != idx && asteroid.isCollidedWith(array[i])) {\n        asteroid.collideWith(array[i]);\n      }\n    }\n  });\n};\n\nGame.prototype.remove = function(asteroid) {\n  let asteroid_index = this.asteroids.indexOf(asteroid);\n  this.asteroids.splice(asteroid_index, 1);\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0,1000,600);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0,0,1000,600);\n\n  this.allObjects().forEach(asteroid => asteroid.draw(ctx));\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach(asteroid => asteroid.move());\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] > this.DIM_X) {\n    pos[0] = 0;\n  } else if (pos[0] < 0) {\n    pos[0] = this.DIM_X;\n  }\n\n  if (pos[1] > this.DIM_Y) {\n    pos[1] = 0;\n  } else if (pos[1] < 0) {\n    pos[1] = this.DIM_Y;\n  }\n\n  return pos;\n};\n\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import Keymaster from 'keymaster';\n\nfunction GameView(game, ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  setInterval(this.game.step.bind(this.game), 20);\n  setInterval(this.game.draw.bind(this.game,this.ctx), 20);\n};\n\nGameView.prototype.bindKeyHandlers = function(){\n\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  [this.pos[0], this.pos[1]] = this.game.wrap([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  return distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n}\n\nfunction distance(pos1, pos2) {\n  return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\n\nconst DEFAULTS = {\n  COLOR: \"blue\",\n  RADIUS: 8\n};\n\nfunction Ship(options){\n  options = options || {};\n  options.color = options.color || DEFAULTS.COLOR;\n  options.radius = options.radius || DEFAULTS.RADIUS;\n  options.pos = options.pos;\n  options.vel = options.vel || [0,0];\n  MovingObject.call(this, options);\n\n}\n\nShip.prototype.relocate = function(){\n  this.pos = this.game.randomPosition();\n  this.vel = [0,0];\n};\n\nShip.prototype.power = function(impulse){\n  [this.vel[0], this.vel[1]] = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n};\n\n\nUtil.inherits(Ship, MovingObject);\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass){\n      childClass.prototype = Object.create(parentClass.prototype);\n      childClass.prototype.constructor = childClass;\n  },\n  randomVec: function randomVec(length){\n    const deg = 2*Math.PI*Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale: function scale(vec, m){\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });