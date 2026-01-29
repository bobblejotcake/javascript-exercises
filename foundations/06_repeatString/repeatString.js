const repeatString = function(string, repeats) {
    if (repeats < 0){
        return "ERROR";
    }

    let finalString = [];
    for (let i =0; i < repeats; i++){
        finalString.push(string);
    }

    return finalString.join('');
};

// Do not edit below this line
module.exports = repeatString;
