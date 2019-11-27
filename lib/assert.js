var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Huzzah! Assertion is " + assertionToCheck);
    }
  },
  isMatch: function(input, target) {
    if (input === target) {
      console.log("Huzzah! " + input + " matches " + target + ".");
    } else {
      throw new Error("Boo. " + input + " does not match " + target + ".");
    }
  } 
};
