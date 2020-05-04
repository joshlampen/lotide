const findKeyByValue = (object, value) => {
  let output;
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      output = key;
    }
  }
  return output;
};

module.exports = findKeyByValue;