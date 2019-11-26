(function(exports) {
  function Note(text) {
    this.text = text;
  }

Note.prototype = (function() {

  function logText() {
    console.log(this.text);
  }

  return {
    logText: logText
  };

})();

  exports.Note = Note;
})(this);
