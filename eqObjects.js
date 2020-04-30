// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    if (typeof object1[key] === "object" && !Array.isArray(object1[key]) && typeof object2[key] === "object" && !Array.isArray(object2[key])) {
      return eqObjects(object1[key], object2[key]);
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // If we're dealing with arrays, run eqArrays
      return eqArrays(object1[key], object2[key]);
    } else { // Otherwise, treat them as primitives
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// TEST CODE
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false