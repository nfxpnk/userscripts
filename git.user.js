// ==UserScript==
// @name        Merge Request - JIRA Link
// @namespace   https://git.ontrq.com/
// @include     https://git.ontrq.com/*
// @version     1
// @grant       none
// ==/UserScript==

let git = {
    ge: function(elementId) {
        return document.getElementById(elementId);
    },
    getElementByXpath: function (path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    },
	appendLink: function(parentElement, issueKey) {
        let link = document.createElement('a');
        link.href = 'https://jira.ontrq.com/browse/' + issueKey;
        link.innerText = issueKey;
        parentElement.parentNode.appendChild(link);
    },
    main: function() {
        let title = this.getElementByXpath('/html/body/div[2]/div[2]/div[3]/div/div/div[2]/div[1]/h2');
		console.log(title.innerText);
		let issueKey = title.innerText.split(':');
		issueKey = issueKey[0];
		console.log(issueKey);
		this.appendLink(title, issueKey);
    }
};

git.main();
