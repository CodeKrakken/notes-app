(function(exports) {
  function NoteList() {
    this.noteArray = [];
    this.textArray = [];
  }

NoteList.prototype = (function() {

  function createNote(text) {
    note = new Note(text);
    this.noteArray.push(note);
  }

  function seeNotes() {
    for (var i=0; i < this.noteArray.length; i++) {
      this.textArray.push(this.noteArray[i].text);
    }
    return this.textArray.join("\n");  
  };

  return {
    createNote: createNote,
    seeNotes: seeNotes
  };

})();

  exports.NoteList = NoteList;
})(this);
