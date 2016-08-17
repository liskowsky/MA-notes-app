(function(exports) {

  function NoteController(view) {
    this._view = view;
  }

  NoteController.prototype._getAppDiv = function() {
    return document.getElementById('app');
  };

  NoteController.prototype.updateHTML = function() {
    this._getAppDiv().innerHTML = this._view.turnInHtml();
  };

  NoteController.prototype.getNoteFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  NoteController.prototype.showNote = function(id){
    var singleView = new SingleNoteView(this._view.listOfNotes.getNoteById(id));
    document.getElementById('app').innerHTML = singleView.getHTML();
  };

  exports.NoteController = NoteController;
})(this);
