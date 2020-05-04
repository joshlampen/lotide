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