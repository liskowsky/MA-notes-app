(function(exports) {
  function Note(text) {
    this.string = text;
  }

  Note.prototype.returnText = function () {
    return this.string;
  };

  exports.Note = Note;

})(this);
