(function(exports) {
  function Note(text) {
    this.text = text;
  }

Note.prototype = (function() {

  function retrieveText() {
    return (this.text);
  }

  return {
    retrieveText: retrieveText
  };

})();

  exports.Note = Note;
})(this);
