const convertToCelsius = function(tempC) {
  tempC = (tempC - 32) * 5 / 9;
  return parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempF) {
  tempF = tempF * 9 / 5 + 32;
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
