(function(exports) {
  function NoteList() {
    this.arrayOfNotes = [];
  }

NoteList.prototype = (function() {

  function createNote(text) {
    note = new Note(text);
    this.arrayOfNotes.push(note.text);
  }

  function seeNotes() {
    console.log(this.arrayOfNotes);
  }
  
  return {
    createNote: createNote
  };

  return {
    seeNotes: seeNotes
  };

})();

  exports.NoteList = NoteList;
})(this);
