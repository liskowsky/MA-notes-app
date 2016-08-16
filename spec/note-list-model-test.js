function testListNotesIsAnEmptyArray() {
  var list = new NoteList();
  assert.isTrue(list.getAllNotes() instanceof Array);
  assert.isTrue(list.getAllNotes().length === 0);
}

function testCreatingAndStoringNotes() {
  var list = new NoteList();
  list.createNewNote("some text");
  list.createNewNote("some different text");
  assert.isTrue(list.getAllNotes()[0] instanceof Note);
  assert.isTrue(list.getAllNotes().length === 2);
  assert.areEqual(list.getAllNotes()[1].returnText(), "some different text");
}

testListNotesIsAnEmptyArray();
testCreatingAndStoringNotes();
