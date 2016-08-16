//Code in a file called note-list-view.js.
//Code is wrapped in the module pattern.
//Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
//Takes a note list model upon instantiation.
//Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
//Handles a note list model that has no notes, one note or several notes.

function testViewingNoteList() {
  var list = new NoteList();
  list.createNewNote("winter is coming");
  list.createNewNote("hear me roar");
  var listView = new ListView(list);
  assert.isTrue(listView.turnInHtml() === "<ul><li><div>winter is coming</div></li><li><div>hear me roar</div></li></ul>");
  //assert.isHtmlList(listView(list));
}

testViewingNoteList();
