const reverseString = function(string) {
    let reversed = "";
    let length = string.length - 1;
    if (string.length == 0) {
        return "";
    } else {
        for (i = length; i >= 0; i--) {
            reversed += string[i];
        }
        return reversed;
    }
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
