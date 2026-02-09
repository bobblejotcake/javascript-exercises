function calculateAge(birthYear){
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();
  let ageArray = array.map((person) => {
    //check if they have a year of Death
    let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : calculateAge(person.yearOfBirth);
    return {name: person.name, age: age};
  })
  console.log(ageArray);
  
  ageArray.sort((a,b) => b.age - a.age);
  
  return ageArray[0];
  
};

// Do not edit below this line
module.exports = findTheOldest;
