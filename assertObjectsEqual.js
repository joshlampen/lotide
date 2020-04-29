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

const eqObjects = function(object1, object2) {
  // Check for identical number of object keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // Check for identical key:value pairs
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // If we're dealing with arrays, run eqArrays
      return eqArrays(object1[key], object2[key]);
    } else { // Otherwise, treat them as primitives
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const object1 = {
  a: 1,
  b: [1, "2", 3]
};

const object2 = {
  b: [1, "2", 3],
  a: 1
};

const object3 = {
  a: 1,
  b: [1, 2, 3]
};

const object4 = {
  a: 1,
  b: [1, "2", 3],
  c: 2
};

const object5 = {
  a: 1
};

assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);
assertObjectsEqual(object1, object4);
assertObjectsEqual(object1, object5);