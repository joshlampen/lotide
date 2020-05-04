const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return an array of each first letter if I use word => word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  
  it("should return an array of each last letter if I use word => word[word.length - 1]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results2 = map(words, word => word[word.length - 1]);
    assert.deepEqual(results2, ["d", "l", "o", "r", "m"]);
  });
  
});