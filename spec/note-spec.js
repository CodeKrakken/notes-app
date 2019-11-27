(function(exports) {
  function doesTheTextStore() {
    var note = new Note("My favourite language is Ruby");

    assert.isTrue(note.text === "My favourite language is Ruby");
};

doesTheTextStore();
})(this);

(function(exports) {
  function canIRetrieveTextFromANote() {
    var note = new Note("My favourite language is Spanish");
    
    assert.isTrue(note.retrieveText() === ("My favourite language is Spanish"));
};

canIRetrieveTextFromANote();
})(this);
