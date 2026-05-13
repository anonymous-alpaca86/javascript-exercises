const convertToCelsius = function(tem) {
  return Number(((tem-32)*5/9).toFixed(1));
};

const convertToFahrenheit = function(tem) {
  return Number((tem*9/5+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
