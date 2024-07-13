const convertToCelsius = function(fahrenheit) {
  let celsius = Number(((fahrenheit - 32) * (5/9)).toFixed(2));
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = Number((celsius * (9/5) + 32).toFixed(2));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
