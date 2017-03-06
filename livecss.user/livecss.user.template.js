// ==UserScript==
// @name        Live CSS
// @namespace   nfxpnk
// @include     *
// @version     5
// @downloadURL https://raw.githubusercontent.com/nfxpnk/userscripts/master/livecss.user/livecss.user.js
// @updateURL   https://raw.githubusercontent.com/nfxpnk/userscripts/master/livecss.user/livecss.user.js
// @grant       none
// ==/UserScript==

var nfxpnk = {
	onPause: true,
	updateTime: 3000,
	filesToUpdate: ['style.css', 'styles.css', 'mobile_global.css', 'foundations_mobile.css', 'globalcomponents.css', 'foundation.css', 'foundations.css', 'foundation-crossfit.css', 'default-global.css', 'default_global.css', 'checkout_global.css', 'checkout_mobile.css', 'custom.css', 'mobile_account.css', 'checkout_mobile_global.css', 'plp_mobile.css', 'local_mobile.css', 'sided.css'],
	param: '?nfxpnk',

	ge: function(elementId) {
		return document.getElementById(elementId);
	},
	getCssFileFromHref: function(string) {
		string = string.substring(string.lastIndexOf('/') + 1);
		string = string.split(nfxpnk.param);
		return string[0];
	},
	getUrlFromHref: function(string) {
		string = string.split(nfxpnk.param);
		return string[0];
	},
	isFileToUpdate: function(string) {
		file = nfxpnk.getCssFileFromHref(string);
		for (var i = 0; i < nfxpnk.filesToUpdate.length; ++i) {
			if(file == nfxpnk.filesToUpdate[i]) {
				return true;
			}
		}
		return false;
	},
	addPlayPauseButton: function() {

		{$html}
		{$css}

		head = document.getElementsByTagName('head')[0];
		style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);

		var newElement = document.createElement('div');
		newElement.setAttribute('class', 'nfxpnk-button nfxpnk-button-' + (nfxpnk.onPause ? 'off' : 'on'));
		newElement.innerHTML = html;

		newElement.onclick = function(e) {
			if(nfxpnk.onPause) {
				nfxpnk.onPause = false;
				this.className = 'nfxpnk-button nfxpnk-button-on';
			} else {
				nfxpnk.onPause = true;
				this.className = 'nfxpnk-button nfxpnk-button-off';
			}
			return false;
		};
		document.body.appendChild(newElement);
	},
	updateStyles: function(id, href) {
		var req = new XMLHttpRequest();
		req.onreadystatechange=function() {
			if (req.readyState == 4 && req.status == 200) {
				nfxpnk.ge(id).innerHTML = req.responseText;
				
				// Urls for images, fonts, etc
				//newCss = req.responseText.replace(/\.\.\//g, "https://dev07-eu-nyr.demandware.net/on/demandware.static/Sites-nyr-Site/-/default/v1484041980136/");
				//nfxpnk.ge(id).innerHTML = newCss;
			}
		}
		req.open('GET', href + nfxpnk.param +'=' + new Date().getMilliseconds(), true);
		req.send();
	},
	main: function() {
		var links = document.getElementsByTagName('link');

		for (var x = 0; x < links.length; ++x) {
			//if(links[x].type != 'text/css') continue;
            //console.log(links[x].rel);
            if(links[x].rel != 'stylesheet') continue;
            //console.log(links[x]);
			if(links[x].getAttribute('data') === null) {
				links[x].setAttribute('data', links[x].href);
			}

			href = links[x].getAttribute('data');

			if(nfxpnk.isFileToUpdate(href) && !nfxpnk.onPause) {

				fileNameId = nfxpnk.getCssFileFromHref(href);

				if(nfxpnk.ge(fileNameId) === null) {
					style = document.createElement('style');
					style.setAttribute('type', 'text/css');
					style.setAttribute('id', fileNameId);
					links[x].parentNode.insertBefore(style, links[x].nextSibling);
				}

				nfxpnk.updateStyles(fileNameId, href);
				links[x].removeAttribute('href');
			}
		}
		setTimeout(nfxpnk.main, nfxpnk.updateTime);
	}
}

nfxpnk.addPlayPauseButton();
nfxpnk.main();