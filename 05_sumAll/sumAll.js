const sumAll = function(firstNumber,lastNumber) {
    let sum = 0;
    if (firstNumber < 0 || lastNumber < 0 || typeof firstNumber !== "number" || typeof lastNumber !== "number") {
      sum = "ERROR";
    } else if (firstNumber > lastNumber) {
      for (let i = firstNumber; i >= lastNumber; i--) {
        sum += i;
      }
    } else if (firstNumber < lastNumber) {
      for (let i = firstNumber; i <= lastNumber; i++) {
          sum += i;
      }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
