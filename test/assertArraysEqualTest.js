const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2], [1, 2, 3]); // fail
assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail