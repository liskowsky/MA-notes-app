(function (exports) {
  function NoteList() {
    this.allNotes = [];
  }

  NoteList.prototype.createNewNote = function (text) {
    this.allNotes.push(new Note(text));
  };

  NoteList.prototype.getAllNotes = function () {
    return this.allNotes;
  };

  exports.NoteList = NoteList;
})(this);
