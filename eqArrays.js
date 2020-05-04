// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  // Check for identical array length
  let equality = true;
  if (array1.length !== array2.length) {
    equality = false;
  }
  // Check for identical elements
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      equality = eqArrays(array1[i], array2[i]);
    } else {
      if (array1[i] !== array2[i]) {
        equality = false;
      }
    }
  }
  return equality;
};

module.exports = eqArrays;