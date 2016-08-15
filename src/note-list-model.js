(function (exports) {
  function NoteList() {
    this.allNotes = [];
  }

  NoteList.prototype.createNewNote = function (text) {
    this.allNotes.push(new Note(text));
  };

  NoteList.prototype.getAllNotes = function () {
    return this.allNotes;
    //for (var i=0; i<this.notes.length; i++ ) {
      //console.log(this.notes[i]);
      //console.log(this.notes[i].returnText()); -> prints text from Note
    //}
  };

  exports.NoteList = NoteList;
})(this);
