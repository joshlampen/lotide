const without = (source, itemsToRemove) => {
  let outputArray = [];
  for (let i = 0; i < source.length; i++) {
    let pushToOutput = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        pushToOutput = false;
      }
    }
    if (pushToOutput === true) {
      outputArray.push(source[i]);
    }
  }
  return outputArray;
};

module.exports = without;