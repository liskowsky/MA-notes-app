//Code in a file called note-list-view.js.
//Code is wrapped in the module pattern.
//Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
//Takes a note list model upon instantiation.
//Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
//Handles a note list model that has no notes, one note or several notes.

function testViewingEmptyHtmlList() {
  console.log('Test Viewing Empty Html List')
  var list = new NoteList();
  var listView = new ListView(list);
  assert.isTrue(listView.turnInHtml() === "<ul></ul>");
}

function testViewingNoteList() {
  console.log('Test Viewing Note List');
  var list = new NoteList();
  list.createNewNote("winter is coming");
  list.createNewNote("hear me roar");
  var listView = new ListView(list);
  var html = "<ul><li><a href=\"#" +
      list.getAllNotes()[0].noteID + "\"><div>winter is coming</div></a></li><li><a href=\"#" +
      list.getAllNotes()[1].noteID + "\"><div>hear me roar</div></a></li></ul>";
  assert.isTrue(listView.turnInHtml() === html);
}

function testViewing20CharsInNoteList() {
  console.log('Test Viewing 20 Chars In Note List')
  var list = new NoteList();
  list.createNewNote("hear me roar, hear me roar, hear me roar");
  var listView = new ListView(list);
  assert.isTrue(listView.turnInHtml() === "<ul><li><a href=\"#" +
      list.getAllNotes()[0].noteID + "\"><div>hear me roar, hear m</div></a></li></ul>");
}


testViewingEmptyHtmlList();
testViewingNoteList();
testViewing20CharsInNoteList();
