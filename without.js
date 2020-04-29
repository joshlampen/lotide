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

const without = (source, itemsToRemove) => {
  let outputArray = [];
  for (let i = 0; i < source.length; i++) {
    let pushToOutput = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        pushToOutput = false;
      }
    }
    if (pushToOutput === true) {
      outputArray.push(source[i]);
    }
  }
  return outputArray;
};

// TEST CODE
// Check that the without function works, using assertArraysEqual
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => should PASS
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), [1, 2]); // => should FAIL

// Check that the without function returns a new array and does not modify the original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);