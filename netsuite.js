// ==UserScript==
// @name         netsuite
// @namespace    netsuite
// @include      http://toad-frontend.zapto.org/sca-elbrus-feteam/*
// @version      0.1
// @author       nfxpnk
// @grant        none
// ==/UserScript==

var nfxpnk = {
	main: function() {
		var head = document.getElementsByTagName('head')[0];
		var newElement = document.createElement('link');
		newElement.setAttribute('rel', 'stylesheet');
		newElement.setAttribute('href', 'http://localhost:7777/css/netsuite.css');
		head.appendChild(newElement);
	}
};
nfxpnk.main();