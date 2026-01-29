const removeFromArray = function(arr) {

    const args = Array.from(arguments);
    return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
