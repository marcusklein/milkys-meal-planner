function paramMissingError (invalidKeys) {
  return `Error: Please provide a ${invalidKeys.join(', ')}.`
}

module.exports = {
  missingParam: paramMissingError
};
