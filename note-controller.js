function NoteController() {
  this.noteList = new NoteList;
  this.noteListView = new NoteListView(this.noteList);
};

NoteController.prototype = (function() {

  function addHTML(text) {
    this.noteList.createNote(text);
    content = this.noteListView.htmlDisplay();
    window.onload = function() {
      document.getElementById("app").innerHTML = content;
    }
  };

  return {
    addHTML: addHTML
  };

})();

noteController = new NoteController();
noteController.addHTML("Favourite drink: seltzer, after the salsa");
