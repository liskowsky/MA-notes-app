function testViewingNoteList() {
  var list = new NoteList();
  list.createNewNote("winter is coming");
  list.createNewNote("hear me roar");
  var listView = new ListView(list);
  assert.isHtmlList(listView(list));
}
