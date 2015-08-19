// ==UserScript==
// @name        Copy JIRA issue title with issue key
// @namespace   https://tools.adidas-group.com/jira/browse
// @include     https://tools.adidas-group.com/jira/browse/*
// @version     1
// @grant       none
// ==/UserScript==

var nfxpnk = {
	ge: function(elementId) {
		return document.getElementById(elementId);
	},

	appendInput: function(parentElement, value, style) {
		var input = document.createElement('input');
		input.type = 'text';
		input.value = value;
		if(typeof(style) != 'undefined') {
			input.style.width = '80%';
		}
		input.onclick = function() {
			input.select();
		}
		parentElement.parentNode.appendChild(input);
	},

	main: function() {
		var issueKey = this.ge('key-val');
		var text = this.ge('summary-val');
		var fullText = issueKey.textContent + ': ' + text.textContent;

		this.appendInput(issueKey, issueKey.textContent);
		this.appendInput(text, fullText, true);
	}
};

nfxpnk.main();