const letterPositions = sentence => {
  const results = {}; // Initialize an output object
  for (let i = 0; i < sentence.length; i++) { // Loop through each character of the string
    if (sentence[i] !== " ") { // Make sure to avoid counting spaces
      if (results[sentence[i]]) { // If the letter is already a key in the object, add the index position to the key's array
        results[sentence[i]].push(i);
      } else { // If not, initialize a key and value for the letter
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;