function testCreateANote() {
  var note = new Note("some text");
  assert.isTrue(note.returnText() === "some text");
  assert.isFalse(note.returnText() === "some different text");
}

testCreateANote();
