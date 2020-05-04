// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = string => {
  let output = {}; // Initialize output object
  for (const character of string) { // Loop through each character of the string
    if (character !== " ") { // Make sure not to count spaces
      if (output[character]) {
        output[character]++;
      } else {
        output[character] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;

// TEST CODE
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);
assertEqual(countLetters("lighthouse in the house")["o"], 2);
assertEqual(countLetters("lighthouse in the house")["u"], 2);
assertEqual(countLetters("lighthouse in the house")["s"], 2);
assertEqual(countLetters("lighthouse in the house")["e"], 3);
assertEqual(countLetters("lighthouse in the house")["n"], 1);