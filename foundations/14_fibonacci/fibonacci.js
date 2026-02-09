function addLastTwo(array){
  let num1 = array[array.length - 2];
  let num2 = array[array.length - 1];
  return num1 + num2;
}

const fibonacci = function(index) {
 let trueIndex = parseInt(index);
  if (trueIndex < 0){
    return "OOPS"
  }
  let repeats = trueIndex - 2;
  if (repeats < 0){
    switch(trueIndex){
      case 0:
        return 0;
        break
      case 1:
        return 1;
        break
      case 2:
        return 2;
        break
    }
  }
  
  let fiboArray = [1,1];
  for (let i = 0; i < repeats; i++){
    fiboArray.push(addLastTwo(fiboArray));
  }
  return fiboArray[trueIndex-1];
};

// Do not edit below this line
module.exports = fibonacci;
