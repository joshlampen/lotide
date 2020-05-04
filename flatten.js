const flatten = array => {
  // Declare output array
  let output = [];
  // Set loops to add array items to the output appropriately based on data type
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        output.push(item[i]);
      }
    } else {
      output.push(item);
    }
  }
  return output;
};

module.exports = flatten;