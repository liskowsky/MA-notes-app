(function(exports) {
  var noteIDCounter = 0;

  function Note(text) {
    this.noteID = noteIDCounter;
    this.string = text;
  }

  Note.prototype.returnText = function () {
    return this.string;
  };

  Note.prototype.incrementNoteIDCounter = function () {
    noteIDCounter++;
  };

  exports.Note = Note;
})(this);
