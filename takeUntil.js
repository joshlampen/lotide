const takeUntil = function(array, callback) {
  let output = [];
  for (const item of array) {
    if (callback(item)) {
      return output;
    } else {
      output.push(item);
    }
  }
  return output; // In case the callback condition is never satisfied
};

module.exports = takeUntil;