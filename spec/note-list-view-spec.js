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

function doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithThreeNotes() {
  var notelist = new NoteList();
  notelist.createNote("Maybe not doing too badly");
  notelist.createNote("It's nice when the tests pass, even when you're basically just doing the same thing a few times");
  notelist.createNote("And it's all good typing practice");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div>Maybe not doing too badly</div></li><li><div>It's nice when the tests pass, even when you're basically just doing the same thing a few times</div></li><li><div>And it's all good typing practice</div></li></ul>");
};

doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithThreeNotes();

function doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithOhLetsSayTenNotes() {
  var notelist = new NoteList();
  notelist.createNote("This");
  notelist.createNote("is");
  notelist.createNote("an");
  notelist.createNote("array");
  notelist.createNote("containing");
  notelist.createNote("a");
  notelist.createNote("steaming");
  notelist.createNote("pile");
  notelist.createNote("of");
  notelist.createNote("short notes");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.htmlDisplay() === "<ul><li><div>This</div></li><li><div>is</div></li><li><div>an</div></li><li><div>array</div></li><li><div>containing</div></li><li><div>a</div></li><li><div>steaming</div></li><li><div>pile</div></li><li><div>of</div></li><li><div>short notes</div></li></ul");
};

doesItReturnAStringOfHTMLThatRepresentsANoteListModelWithOhLetsSayTenNotes();
