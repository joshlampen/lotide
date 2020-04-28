// TEST/ASSERTION FUNCTIONS
const eqArrays = (array1, array2) => {
  // Check for identical array length
  if (array1.length !== array2.length) {
    return false;
  }
  // Check for identical elements
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  // Check for identical array length
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
    return;
  }
  // Check for identical elements
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
};


// ACTUAL FUNCTION
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


// TEST CODE
console.log(eqArrays([], middle([1]))); // should log TRUE
console.log(eqArrays([1], middle([1, 2]))); // should log FALSE
console.log(eqArrays([2], middle([1, 2, 3]))); // should log TRUE
console.log(eqArrays([3, 4], middle([1, 2, 3, 4, 5]))); // should log FALSE
console.log(eqArrays([2, 3], middle([1, 2, 3, 4]))); // should log TRUE
console.log(eqArrays([4], middle([1, 2, 3, 4, 5, 6]))); // should log FALSE

assertArraysEqual([], middle([1])); // should PASS
assertArraysEqual([1], middle([1, 2])); // should FAIL
assertArraysEqual([2], middle([1, 2, 3])); // should PASS
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5])); // should FAIL
assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // should PASS
assertArraysEqual([4], middle([1, 2, 3, 4, 5, 6])); // should FAIL