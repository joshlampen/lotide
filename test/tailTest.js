const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns ['Lighthouse', 'Labs'] for applying tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns 2 for applying tail(['Hello', 'Lighthouse', 'Labs']).length", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("returns 'Lighthouse' for applying tail(['Hello', 'Lighthouse', 'Labs'])[0]", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });

  it("returns 'Labs' for applying tail(['Hello', 'Lighthouse', 'Labs'])[1]", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs');
  });

  it("length of original array should not be modified when the function is called", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});