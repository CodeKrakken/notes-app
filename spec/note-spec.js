(function(exports) {
  function doesTheTextStore() {
    var note = new Note();

  if (note.text !== "My favourite language is Ruby") {
   throw new Error("Text does not match");
  } else {
    console.log("Huzzah!");
  }

};
doesTheTextStore();
})(this);
