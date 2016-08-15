(function(exports) {
  function isTrue(assertionToCheck) {
    if (assertionToCheck) {
      console.log("PASSED");
    }
    else {
      console.log("Fail! I was expecting TRUE, but got", assertionToCheck);
    }
  }

  function isFalse(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("PASSED");
    }
    else {
      console.log("Fail! I was expecting FALSE, but got", assertionToCheck);
    }
  }

  function areEqual(val1, val2){
    if (val1 === val2) {
      console.log("PASSED");
    }
    else {
      console.log("Fail! ", val1, " does not equal ", val2);
    }
  }

  exports.assert = {
    isTrue: isTrue,
    isFalse: isFalse,
    areEqual: areEqual
  };

})(this);
