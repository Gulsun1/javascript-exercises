const removeFromArray = function(array, ...elementToRemove) {
   elementToRemove.forEach(elementToRemove => {
        let index  = array.indexOf(elementToRemove);
        while (index > -1) {
            array.splice(index, 1);
            index = array.indexOf(elementToRemove);
        }
   });
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;