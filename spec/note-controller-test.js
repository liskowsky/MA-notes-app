function testNoteController() {
  var newList = new NoteList();
  newList.createNewNote("winter is coming");
  newList.createNewNote("hear me roar");
  var newView = new ListView(newList);
  var noteController = new NoteController(newView);
  assert.isTrue(noteController._view === newView);
  var element = document.createElement("div", {id: "app"});
  noteController._getAppDiv = function() {
    return element;
  };
  noteController.updateHTML();
  assert.isTrue(noteController._getAppDiv().innerHTML === newView.turnInHtml());
}

testNoteController();
