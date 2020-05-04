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

const letterPositions = sentence => {
  const results = {}; // Initialize an output object
  for (let i = 0; i < sentence.length; i++) { // Loop through each character of the string
    if (sentence[i] !== " ") { // Make sure to avoid counting spaces
      if (results[sentence[i]]) { // If the letter is already a key in the object, add the index position to the key's array
        results[sentence[i]].push(i);
      } else { // If not, initialize a key and value for the letter
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// TEST CODE
assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);