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
    return this.arrayOfNotes.join("\n");
  }

  return {
    createNote: createNote,
    seeNotes: seeNotes
  };

})();

  exports.NoteList = NoteList;
})(this);
