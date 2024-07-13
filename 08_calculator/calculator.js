const add = function(x,y) {
	let solution = x + y;
  return solution;
};

const subtract = function(x,y) {
	let solution = x - y;
  return solution;
};

const sum = function(...x) { //Pending fix
	let result = x.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
  }, 0);
  return result;
};

const multiply = function(...x) { //Pending fix
  let result = x.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 0);
return result;
};

const power = function(x,y) {
	let result = x ** y;
  return result;
};

const factorial = function(x) {
	let factorial = 1;  
  for (let i = x; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
