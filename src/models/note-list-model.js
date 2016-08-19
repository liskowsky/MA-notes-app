(function (exports) {
  function NoteList() {
    this.allNotes = [];
  }

  NoteList.prototype.createNewNote = function (text) {
    var newNote = new Note(text);
    this.allNotes.push(newNote);
    newNote.incrementNoteIDCounter();
  };

  NoteList.prototype.getAllNotes = function () {
    return this.allNotes;
  };

  NoteList.prototype.getNoteById = function (id) {
    var noteFound;
    this.allNotes.forEach(function(note) {
      if(note.noteID === id) {
        noteFound = note;
      }
    });
    return noteFound;
  };

  exports.NoteList = NoteList;
})(this);
