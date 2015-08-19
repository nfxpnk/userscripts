// ==UserScript==
// @name        Insert commit table into JIRA comment
// @namespace   nfxpnk
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
    //commentTextArea.value += '||SVN revisions||Code review||Impacted areas||' + "\n";
    //commentTextArea.value += '|77777|FISHEYE|Home|';
    
    //commentTextArea.value += "\n\n\n";
    
    commentTextArea.value += '|*Description*|Changes|' + "\n";
    commentTextArea.value += '|*SVN revision*|77777|' + "\n";
    commentTextArea.value += '|*Branch*|https://svn.adidas-group.com/project/adidas-ecom-ru/branches/dev|' + "\n";
    commentTextArea.value += '|*Code review*|[http://fisheye.ontrq.com:8060/cru/]|' + "\n";
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