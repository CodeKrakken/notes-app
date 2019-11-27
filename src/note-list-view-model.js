(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }
// console.log(this.notelist);
NoteListView.prototype = (function() {

  function htmlDisplay() {
    
    return "<ul><li><div>" + this.notelist.arrayOfNotes[0].text + "</div></li></ul>";

  }

  return {
    htmlDisplay: htmlDisplay
  };

})();

exports.NoteListView = NoteListView;

})(this);
