function testNoteController() {
  var newList = new NoteList();
  list.createNewNote("winter is coming");
  list.createNewNote("hear me roar");
  var newView = new ListView(newList);
  element = document.createElement("div", {id: "app"});
  noteController._getAppDiv = function() {
    return element;
  };
  var noteController = new NoteController(newView);
  assert.isTrue(noteController._getAppDiv().innerHTML === newView.turnInHtml());
}

testNoteController();
