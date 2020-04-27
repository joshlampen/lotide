// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (typeof actual === "number" && typeof expected === "number") {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    }
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Lighthouse Labs", 1);
assertEqual(1, "Lighthouse Labs");