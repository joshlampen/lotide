const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual([], middle([1])); // should PASS
assertArraysEqual([1], middle([1, 2])); // should FAIL
assertArraysEqual([2], middle([1, 2, 3])); // should PASS
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5])); // should FAIL
assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // should PASS
assertArraysEqual([4], middle([1, 2, 3, 4, 5, 6])); // should FAIL