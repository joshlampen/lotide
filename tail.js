const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) { // for loop ensures the original array is not modified
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;