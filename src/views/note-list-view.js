//"<ul><li><div>winter is coming</div></li><li><div>hear me roar</div></li></ul>"

(function(exports) {
  function ListView(list) {
    this.listOfNotes = list;
  }

  ListView.prototype.turnInHtml = function () {
    var wholeHtmlString = "<ul>" + this.listingFunction(this.listOfNotes) + "</ul>";
    return wholeHtmlString;
  };

  ListView.prototype.listingFunction = function (someList) {
    var stringArray = [];
    someList.getAllNotes().forEach(function(note) {
      stringArray.push("<li><a href=\"#" + note.noteID + "\"><div>" + note.string.substr(0,20) + "</div></a></li>");
    });
    return stringArray.join("");
  };

  exports.ListView = ListView;

})(this);
