const assertObjectsEqual = require('../assertObjectsEqual');

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

assertObjectsEqual(object1, object2); // pass
assertObjectsEqual(object1, object3); // fail
assertObjectsEqual(object1, object4); // fail
assertObjectsEqual(object1, object5); // fail