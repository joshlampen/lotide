const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 1 for countLetters('lighthouse in the house')['l']", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["l"], 1);
  });
  
  it("returns 1 for countLetters('lighthouse in the house')['h']", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["h"], 4);
  });
});