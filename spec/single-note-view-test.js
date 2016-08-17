function testSingleNoteView() {
  console.log('testSingleNoteView')
  var newNote = new Note("hello");
  var view = new SingleNoteView(newNote);
  assert.isTrue(view.singleNoteHtml() === "<div>hello</div>");
}

testSingleNoteView();
