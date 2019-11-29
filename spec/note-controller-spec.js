function theNoteControllerCanBeInstantiated() {
  var notecontroller = new NoteController;
  assert.isTrue(notecontroller instanceof NoteController);
};

theNoteControllerCanBeInstantiated();

function innerHTMLPropertyOfAppElement() {
  var notecontroller = new NoteController;
  notecontroller.addHTML("Ha ha ha ha ha ha ha ow");
  assert.isTrue(notecontroller.getElementById("app").innerHTML === "<ul><li><div>Ha ha ha ha ha ha ha ow</div></li></ul>");
//   notecontroller.addHTML("Ha ha ha ha ha ha ha ow") === "<ul><li><div>Ha ha ha ha ha ha ha ow</div></li></ul>");
  console.log(notecontroller.addHTML("Ha ha ha ha ha ha ha ow"));
};

innerHTMLPropertyOfAppElement();
