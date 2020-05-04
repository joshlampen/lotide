const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("should return the first key that matches the callback function's condition", () => {
    let result1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(result1, "noma");
  });

  it("should return undefined if no key matches callback function's condition", () => {
    let result3 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4);
    assert.strictEqual(result3, undefined);
  });
});