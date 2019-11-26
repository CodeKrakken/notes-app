(function(exports) {
  function Note(text) {
    this.text = text;
  }

Note.prototype = (function() {

  function retrieveNote() {
    (this.text);
  }

  return {
    retrieveNote: retrieveNote
  };

})();

  exports.Note = Note;
})(this);
