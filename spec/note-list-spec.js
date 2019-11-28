(function(exports) {
  function doesTheNoteStoreInTheArray() {
    var notelist = new NoteList();
    notelist.createNote("Favourite drink: seltzer, after the salsa");
    assert.isTrue(notelist.noteArray[0].text === ("Favourite drink: seltzer, after the salsa"));
  };
  
doesTheNoteStoreInTheArray();
})(this);

(function(exports) {
  function canISeeAllNotes() {
    var notelist = new NoteList();
    notelist.createNote("JavaScript is hard");
    notelist.createNote("Actually not hard, just new");
    assert.isTrue(notelist.seeNotes() === ('JavaScript is hard\nActually not hard, just new'));
  };

canISeeAllNotes();
})(this);
