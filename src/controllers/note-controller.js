(function(exports) {

  function NoteController(view) {
    this._view = view;
  }

  NoteController.prototype._getAppDiv = function() {
    return document.getElementById("app");
  };

  NoteController.prototype.updateHTML = function() {
    this._getAppDiv().innerHTML = this._view.turnInHtml();
  };

  NoteController.prototype.getNoteFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  NoteController.prototype.showNote = function(id){
    console.log(this._view);
    console.log(this._view.listOfNotes);
    console.log(id);
    console.log(this._view.listOfNotes.getNoteById(id)); //THIS IS THE BUG
    var singleView = new SingleNoteView(this._view.listOfNotes.getNoteById(id));
    console.log(singleView);
    document.getElementById("app").innerHTML = singleView.singleNoteHtml();
  };

  exports.NoteController = NoteController;
})(this);
