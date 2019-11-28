(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }
  
NoteListView.prototype = (function() {

  function htmlDisplay() {
    if (!this.notelist) {return "<ul><li><div></div></li></ul>"; };
    for (var i=0; i < this.notelist.noteArray.length; i++) {
      this.notelist.textArray.push(this.notelist.noteArray[i].text);
    }
    return "<ul><li><div>" + this.notelist.textArray.join("</div></li><li><div>") + "</div></li></ul>";
  }

  return {
    htmlDisplay: htmlDisplay
  };

})();

exports.NoteListView = NoteListView;

})(this);
