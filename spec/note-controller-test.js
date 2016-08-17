function testNoteController() {
  console.log('Test Note Controller');
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

function testDisplaySingleNoteOnClick() {
  console.log("Test Display Single Note on Click");
  var note;
  var noteList;
  var noteController;
  var view;

  list = new NoteList();
  list.createNewNote('This is just a test');
  view = new ListView(list);

  note = new SingleNoteView(list.getAllNotes()[0]);

  var appDiv = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return appDiv;
  };

  noteController = new NoteController(view);
  noteController.updateHTML();
  function showNoteForCurrentPage(){
    noteController.showNote(noteController.getNoteFromUrl(window.location));
  }
  window.addEventListener("hashchange", showNoteForCurrentPage);

  appDiv.getElementsByTagName('a')[0].click();

  window.setTimeout(function(){
    var htmlOutput = "<ul><li><a href=\"#" + list.getAllNotes()[0].noteID + "\">" + note.singleNoteHtml() + "</a></li></ul>";
    var element = appDiv;

    console.log("expected: ",  htmlOutput);
    console.log("got: ", element.innerHTML);

    assert.isTrue(htmlOutput === element.innerHTML);
    // document.getElementById = document.__proto__.getElementById;
  }, 500);

}

testNoteController();
testDisplaySingleNoteOnClick();
