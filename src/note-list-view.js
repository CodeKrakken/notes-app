(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }
  
NoteListView.prototype = (function() {

  function htmlDisplay() {
    
    for (var i=0; i < this.notelist.noteArray.length; i++) {                        // for the many
      this.notelist.textArray.push(this.notelist.noteArray[i].text);                // for the many
    }                                                                               // for the many
    return "<ul><li><div>" + this.notelist.textArray.join("</div></li><li><div>") + "</div></li></ul>"; // for the many
  }

  return {
    htmlDisplay: htmlDisplay
  };

})();

exports.NoteListView = NoteListView;

})(this);
