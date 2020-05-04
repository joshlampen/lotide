const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// TEST CODE
// Check that the without function works, using assertArraysEqual
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => should PASS
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), [1, 2]); // => should FAIL

// Check that the without function returns a new array and does not modify the original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS