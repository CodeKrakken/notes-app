(function(exports) {
  function NoteList() {
    this.arrayOfNotes = [];
    this.textArray = [];
  }

NoteList.prototype = (function() {

  function createNote(text) {
    note = new Note(text);
    this.arrayOfNotes.push(note);
  }

  function seeNotes() {
    for (var i=0; i < this.arrayOfNotes.length; i++) {
      this.textArray.push(this.arrayOfNotes[i].text);
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
