(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Test NOT passing");
    }
    else {
      console.log("Test passing");
    }
  }
  exports.assert = {
    isTrue: isTrue
  };

})(this);
