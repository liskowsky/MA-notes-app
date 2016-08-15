function testCreateANote() {
  var note = new Note("some text");
  assert.isTrue(note.returnText() === "some text");
}

testCreateANote();
