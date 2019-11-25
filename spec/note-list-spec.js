(function(exports) {
  function doesTheNoteStoreInTheArray() {
    var note = new Note();

    
//   note.add("My favourite language is Ruby");
  if (this.textArray.includes("My favourite language is Ruby")) {
    console.log("pass!");
  } else {
    throw new Error("Text not included in array");
  }

};
doesTheNoteStoreInTheArray();
})(this);
