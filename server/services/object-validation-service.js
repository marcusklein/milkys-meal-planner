function validate (object, required) {

  let valid = true;
  let invalidKeys = [];

  required.forEach(key => {
    if (!object[key]) {
      valid = false;
      invalidKeys.push(key);
    }
  });

  return {
    valid: valid,
    invalidKeys: invalidKeys
  };
}

module.exports = {
  validate: validate
};
