(function(exports){
  var SingleNoteView = function(note){
    this.note = note;
  };

  SingleNoteView.prototype.singleNoteHtml = function () {
    return "<div>" + this.note.returnText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
