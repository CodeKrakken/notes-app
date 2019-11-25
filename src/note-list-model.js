(function(exports) {
  function doesTheNoteStoreInTheArray() {
   
    this.textArray = [];
  };

Note.prototype.add = function(note) {
  this.textArray.push(note);

}

})(this);



