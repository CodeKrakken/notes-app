function doesTheNoteListViewStoreTheNoteListModel() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue((notelistview.notelist) === (notelist));
};

doesTheNoteListViewStoreTheNoteListModel();

function doesItReturnAStringOfHTMLThatRepresentsTheNoteListModel() {
  var notelist = new NoteList();
  notelist.createNote("Oh God");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div>Oh God</div></li></ul>");

};

doesItReturnAStringOfHTMLThatRepresentsTheNoteListModel();
