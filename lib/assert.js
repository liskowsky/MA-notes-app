(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      return "Assertion failed: " + assertionToCheck + " is not truthy";
    }
  }
  exports.assert = {
    isTrue: isTrue
  };
  
})(this);
