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
      stringArray.push("<li><div>" + note.string + "</div></li>");
    });
    return stringArray.join("");
  };

  exports.ListView = ListView;

})(this);
