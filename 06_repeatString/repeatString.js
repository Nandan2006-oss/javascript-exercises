const repeatString = function(oldString, num) {
    if (num >= 0) {
        newString = "";
        for(i = 0; i < num; i++) {
            newString += oldString;
        }
        return newString;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
