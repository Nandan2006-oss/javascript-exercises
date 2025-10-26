const removeFromArray = function(array, ...args) {
    newArray = [];
    newArray = array.filter(item => !(args.includes(item)));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
