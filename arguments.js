function sum(){
  let array = Array.prototype.slice.call(arguments);
  let sum = 0;
  array.forEach( (el) => {
    sum += el;
  });
  return sum;
}


function sum2(...args){
  let sum = 0;
  args.forEach( (el) => {
    sum += el;
  });
  return sum;
}
// console.log(sum2(1,2,3,4));

Function.prototype.myBind = function(context, ...args){
  let current_func = this;
  let old_args = args;
  return (...args2)=>{
    let total_args = old_args.concat(args2);
    current_func.call(context, ...total_args);
  };
};

// Function.prototype.myBind = function(context){
//   let current_func = this;
//   let old_args = Array.prototype.slice.call(arguments, 1);
//   return function(){
//     // console.log(old_args);
//     let new_args = Array.prototype.slice.call(arguments);
//     let total_args = old_args.concat(new_args);
//     current_func.call(context, ...total_args);
//   };
// };


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
//
// markov.says.myBind(breakfast, "meow")("Markov");
//
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
//
// function curriedSum(numIntegers){
//   let sum = 0;
//   let count = 0;
//   return function my_func(integer){
//     sum += integer;
//     count += 1;
//     if (numIntegers === count)
//       return sum;
//     else{
//       return my_func;
//     }
//   };
// }
//
// function curriedSum(numIntegers){
//   let numbers = [];
//   return function _curriedSum(number) {
//     numbers.push(number);
//     if (numbers.length === numIntegers) {
//       let sum = 0;
//       numbers.forEach(el => sum += el);
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   };
// }
//
// // console.log(curriedSum(3)(4)(20)(6));
// let f1 = curriedSum(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// console.log(f1 = f1(4)); // [Function]
// console.log(f1 = f1(20)); // [Function]
// console.log(f1 = f1(6)); // = 30


Function.prototype.curry = function(numArgs) {
  let current_func = this;
  const args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      current_func.apply(null, args);
    } else {
      return _curry;
    }
  };
};

Function.prototype.curry = function(numArgs) {
  let current_func = this;
  const args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      current_func.call(null, ...args);
    } else {
      return _curry;
    }
  };
};
