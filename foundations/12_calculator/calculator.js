const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if(array.length == 0){
    return 0;
  }
  else{
    return array.reduce((total,number) =>  total += number)
  }
	
};

const multiply = function(array) {
  return array.reduce((total,number) => total *= number);
};

const power = function(base, exo) {
	  if (exo == 0){
    return 1;
  }
  else{
    let exoArray = [];
    for (let i = 0; i < exo; i++){
      exoArray.push(base);
    }
    return multiply(exoArray);
  }
};

const factorial = function(factNum) {
	if(factNum == 0){
    return 1
  }
  else{
    let factArray = [];
    for (let i=0; i < factNum; i++){
      factArray.push(factNum-i);
    }
    return multiply(factArray);
  }
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
