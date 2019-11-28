function doesTheNoteListViewStoreTheNoteListModel() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue((notelistview.notelist) === (notelist));
};

doesTheNoteListViewStoreTheNoteListModel();

function doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithOneNote() {
  var notelist = new NoteList();
  notelist.createNote("Oh God");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div>Oh God</div></li></ul>");

};

doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithOneNote();

function doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithNoNotes() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div></div></li></ul>");

};

doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithNoNotes();

function doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithTwoNotes() {
  var notelist = new NoteList();
  notelist.createNote("How am I doing?");
  notelist.createNote("Who the hell knows?");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div>How am I doing?</div></li><li><div>Who the hell knows?</div></li></ul>");

};

doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithTwoNotes();
