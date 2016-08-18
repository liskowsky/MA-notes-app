(function(exports) {
  var noteIDCounter = 0;

  function Note(text) {
    this.noteID = noteIDCounter++;
    this.string = text;
  }

  Note.prototype.returnText = function () {
    return this.string;
  };

  exports.Note = Note;
})(this);
