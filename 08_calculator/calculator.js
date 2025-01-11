const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  const totalSum = arr.reduce((total, num) => {
        return total + num;
      }, 0);

  return Number(totalSum);
};

const multiply = function(arr) {
  const totalMultiplied = arr.reduce((total, num) => {
    return total * num;
  }, 1);

  return totalMultiplied;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
