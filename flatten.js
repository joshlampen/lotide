// FUNCTION IMPLEMENTATION
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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

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

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should PASS
assertArraysEqual(flatten([1, 2, ["3", 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should FAIL