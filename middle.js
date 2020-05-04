// Create helper function to find middle index/indices based on if the array has an even or odd number of elements
const findMiddle = array => {
  if (array.length % 2 === 0) {
    return [(array.length / 2) - 1, (array.length / 2)];
  } else {
    return [Math.floor(array.length / 2)];
  }
};

const middle = array => {
  let output = [];
  // Output should only change if the array has more than two elements
  if (array.length > 2) {
    for (let index of findMiddle(array)) {
      output.push(array[index]);
    }
  }
  return output;
};

module.exports = middle;