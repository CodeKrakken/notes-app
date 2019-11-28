(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }
NoteListView.prototype = (function() {

  function htmlDisplay() {
    for (var i=0; i < this.notelist.arrayOfNotes.length; i++) {
      this.notelist.textArray.push(this.notelist.arrayOfNotes[i].text);
    }
    return "<ul>" + this.notelist.textArray.join("</div></li><li><div>") + "</ul>";
 
  }

  return {
    htmlDisplay: htmlDisplay
  };

})();

exports.NoteListView = NoteListView;

})(this);
