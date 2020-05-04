const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return [0] for letterPositions('hello')['h']", () => {
    assert.deepEqual(letterPositions("hello")["h"], [0]);
  });
  
  it("should return [1] for letterPositions('hello')['e']", () => {
    assert.deepEqual(letterPositions("hello")["e"], [1]);
  });

  it("should return [2, 3] for letterPositions('hello')['l']", () => {
    assert.deepEqual(letterPositions("hello")["l"], [2, 3]);
  });

  it("should return [0] for letterPositions('hello')['h']", () => {
    assert.deepEqual(letterPositions("hello")["o"], [4]);
  });
});