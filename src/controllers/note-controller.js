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

  exports.NoteController = NoteController;
})(this);
