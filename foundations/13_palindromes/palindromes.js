const palindromes = function (str) {
  let newArray = str.split("");
  
  //remove all punctionation && lowercase all words
  let lowerArray = newArray.map((letter) => letter.toLowerCase());
  let filteredArray = lowerArray.filter((letter) => !isPunctuation(letter)).join("");
  
  console.log(filteredArray);
  //create a new copy
  
  let copy = [...filteredArray].reverse().join("");
  console.log(`Copy: ${copy}`)
  //reverse said copy
  
  //if OG and new copy are the same! must be palindrome!
  console.log(`OG: ${filteredArray}`)
  
  return filteredArray == copy ? true : false;
};

function isPunctuation(char) {
  return /^[,""!?. ]$/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
