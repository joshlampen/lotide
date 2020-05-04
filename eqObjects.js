const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // Check for identical number of object keys
  let equality = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // Check for identical key:value pairs
  for (const key of Object.keys(object1)) {
    if (typeof object1[key] === "object" && !Array.isArray(object1[key]) && typeof object2[key] === "object" && !Array.isArray(object2[key])) {
      equality = eqObjects(object1[key], object2[key]);
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // If we're dealing with arrays, run eqArrays
      equality = eqArrays(object1[key], object2[key]);
    } else { // Otherwise, treat them as primitives
      if (object1[key] !== object2[key]) {
        equality = false;
      }
    }
  }
  return equality;
};

module.exports = eqObjects;