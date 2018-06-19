// ==UserScript==
// @name        Copy JIRA issue title with issue key
// @namespace   https://jira.ontrq.com/browse/
// @include     https://jira.ontrq.com/browse/*
// @version     4
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
		var issueType = this.ge('type-val').innerText;

		var messageType = issueType.match(/Bug/) ? '???' : 'Add';
		
		var messageTypeBranch = issueType.match(/Bug/) ? 'fix' : 'feature';

		var fullText = issueKey.textContent + ':' + messageType + ': ' + text.textContent;

		this.appendInput(issueKey, issueKey.textContent);
		this.appendInput(text, fullText, true);

		var summary = text.textContent.toLowerCase().replace(/[^ \w]+/g, '');
		summary = summary.replace(/ +/g, '-');
		//summary = summary.substring(0, 40);

		var branchName = messageTypeBranch.toLowerCase() + '/' + issueKey.textContent + '-' + summary;
		this.appendInput(text, branchName, true);
	}
};

nfxpnk.main();
