// ==UserScript==
// @name        Insert commit table into JIRA comment
// @namespace   https://tools.adidas-group.com/
// @include     https://tools.adidas-group.com/jira/browse/*
// @version     1
// @grant       none
// ==/UserScript==

var nfxpnk = {
	ge: function(elementId) {
		return document.getElementById(elementId);
	},
  
  addTable: function() {
    var commentTextArea = this.ge('comment');
    
    commentTextArea.value += '|*Description*|Changes|' + "\n";
    commentTextArea.value += '|*Code review*|[]|' + "\n";
    commentTextArea.value += '|*Impacted areas*|Adidas|' + "\n";
    
    return false;
  },

	main: function() {
		var previewLink = this.ge('comment-preview_link');
    var newElement = document.createElement('a');
    newElement.setAttribute('href', '#');
    newElement.setAttribute('style', 'margin-right:5px;');
    newElement.appendChild(document.createTextNode("add table"));
    var thisCopy = this;
    newElement.onclick = function(e) {
      return nfxpnk.addTable();
    };

    previewLink.parentNode.insertBefore(newElement, previewLink);
	}
};

nfxpnk.main();