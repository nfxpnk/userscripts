// ==UserScript==
// @name        Copy JIRA issue title with issue key
// @namespace   nfxpnk
// @include     https://tools.adidas-group.com/jiraold/browse/*
// @version     1
// @grant       none
// ==/UserScript==

var nfxpnk = {
	ge: function(elementId) {
		return document.getElementById(elementId);
	},

	appendInput: function(parentElement, value, style=false) {
		var input = document.createElement('input');
		input.type = 'text';
		input.value = value;
		if(style !== false) {
			input.style = style;
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
		this.appendInput(text, fullText, 'width: 80%;');
	}
};

nfxpnk.main();