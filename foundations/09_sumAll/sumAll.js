const sumAll = function(num1, num2) {
  //Need to add 1 to repeats in order to be inclusive of the last array
  //variable.

  //Check that both variables are valid - must be integer
  if (num1 < 0 || num2 < 0){
    return "ERROR"
  }
  else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return "ERROR"
  }

  const repeats = Math.abs(num1 - num2) + 1;
  let startNumber = 0;
  if (num1 < num2){
    startNumber = num1;
  }
  else{
    startNumber = num2;
  }
  
  let finalArray = [];
  
  for (let i = 0; i  < repeats; i++){
    finalArray[i] = startNumber + i;
  };
  
  finalSum = finalArray.reduce((totalSum, num) => {return totalSum += num} );
  
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
