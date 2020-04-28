// FUNCTION IMPLEMENTATION
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);