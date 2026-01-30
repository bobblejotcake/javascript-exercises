const convertToCelsius = function(fahrenheit) {
  let calculation = (fahrenheit-32) * (5/9);
  return Math.round(calculation * 10)/10 ;
  
};

const convertToFahrenheit = function(celsius) {
  let calculation = (celsius*9/5)+32;
  return Math.round(calculation * 10)/10 ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
