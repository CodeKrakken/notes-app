(function(exports) {
  function doesTheNoteStoreInTheArray() {
    var notelist = new NoteList();
    notelist.createNote("Favourite drink: seltzer, after the salsa");

    assert.isTrue(notelist.arrayOfNotes.includes("Favourite drink: seltzer, after the salsa"));
  };
  
doesTheNoteStoreInTheArray();
})(this);
