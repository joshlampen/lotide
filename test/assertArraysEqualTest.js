const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);