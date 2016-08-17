function testCreateANote() {
  var note = new Note("some text");
  assert.isTrue(note.returnText() === "some text");
  assert.isFalse(note.returnText() === "some different text");
  assert.isTrue(note.noteID === 0);
  var secondNote = new Note("Second note text");
  assert.isFalse(secondNote.noteID === 0);
  assert.isTrue(secondNote.noteID === 1);
  var thirdNote = new Note("Third note text");
  assert.isFalse(thirdNote.noteID === 1);
  assert.isTrue(thirdNote.noteID === 2);
}

testCreateANote();
