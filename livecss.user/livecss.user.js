// ==UserScript==
// @name        Live CSS
// @namespace   nfxpnk
// @include     *
// @version     5
// @downloadURL https://raw.githubusercontent.com/nfxpnk/userscripts/master/livecss.user.js
// @updateURL   https://raw.githubusercontent.com/nfxpnk/userscripts/master/livecss.user.js
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

		var html = '<div style="position: absolute; clip: rect(0, 0, 0, 0);"><svg xmlns="http://www.w3.org/2000/svg"><symbol id="nfxpnk-icon-play" viewBox="0 0 32 32"><path d="M 28.702988,15.421428 8.3284652,1.370034 C 8.1127763,1.2217918 7.8331536,1.2063352 7.6027107,1.3264747 7.3715653,1.4480192 7.2268359,1.6868929 7.2268359,1.9482489 V 30.051038 c 0,0.261356 0.1447294,0.500932 0.3758748,0.622476 0.1025752,0.0534 0.2149863,0.08009 0.3266949,0.08009 0.1398114,0 0.2789202,-0.04215 0.3990596,-0.124354 L 28.702988,16.577858 c 0.190397,-0.13138 0.30351,-0.347069 0.30351,-0.578215 0,-0.231145 -0.113816,-0.446834 -0.30351,-0.578215 z"></path></symbol><symbol id="nfxpnk-icon-pause" viewBox="0 0 32 32"><path d="M 11.844623,2.4949252 H 6.6503616 c -1.1474852,0 -2.0776609,0.9302916 -2.0776609,2.0776591 V 27.427416 c 0,1.147483 0.9301757,2.077659 2.0776609,2.077659 h 5.1942614 c 1.147486,0 2.077661,-0.930176 2.077661,-2.077659 V 4.5725843 C 13.922166,3.4252168 12.991991,2.4949252 11.844623,2.4949252 Z m 13.505015,0 h -5.194262 c -1.147602,0 -2.077778,0.9302916 -2.077778,2.0776591 V 27.427416 c 0,1.147483 0.930176,2.077659 2.077778,2.077659 h 5.194262 c 1.147486,0 2.077661,-0.930176 2.077661,-2.077659 V 4.5725843 C 27.427417,3.4252168 26.497124,2.4949252 25.349638,2.4949252 Z"></path></symbol></svg></div><div class="nfxpnk-btn"><i class="nfxpnk-icon"><svg class="nfxpnk-icon-svg nfxpnk-icon-play"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nfxpnk-icon-play"></use></svg><svg class="nfxpnk-icon-svg nfxpnk-icon-pause"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nfxpnk-icon-pause"></use></svg></i></div>';
		var css = '.nfxpnk-button {position: fixed;z-index: 99999;right: 40px;top: 40px;width: 40px;height: 40px;}.nfxpnk-btn {border: 2px solid transparent;border-radius: 100%;width: 40px;height: 40px;background: #ccc;cursor: pointer;text-align: center;color: #000;border-color: #000;-webkit-transform: scale(1);transform: scale(1);transition: -webkit-transform .1s;transition: transform .1s;transition: transform .1s, -webkit-transform .1s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.nfxpnk-btn:hover {-webkit-transform: scale(1.08);transform: scale(1.08);}.nfxpnk-btn:active {-webkit-transform: scale(0.98);transform: scale(0.98);background: #000;color: #fff;}.nfxpnk-icon {width: 20px;height: 20px;position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;color: inherit;fill: currentColor;transition: color .2s, fill .2s, background .2s, box-shadow .2s, opacity .2s;}.nfxpnk-icon .nfxpnk-icon-svg {box-sizing: border-box;width: inherit;max-width: inherit;height: inherit;max-height: inherit;fill: inherit;background: inherit;-moz-transform: translateX(0);-ms-transform: translate(0.5px, -0.3px);pointer-events: none;}.nfxpnk-icon .nfxpnk-icon-svg > use {transition: opacity .2s;}.nfxpnk-button-off .nfxpnk-btn {background: #fff;color: #fd5151;border-color: #fd5151;}.nfxpnk-button-off .nfxpnk-btn:active {background: #fd5151;color: #fff;}.nfxpnk-button-off .nfxpnk-icon-play {display: block;}.nfxpnk-button-off .nfxpnk-icon-pause {display: none;}.nfxpnk-button-on .nfxpnk-btn {background: #fff;color: #51aefd;border-color: #51aefd;}.nfxpnk-button-on .nfxpnk-btn:active {background: #51aefd;color: #fff;}.nfxpnk-button-on .nfxpnk-icon-play {display: none;}.nfxpnk-button-on .nfxpnk-icon-pause {display: block;}';

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
				//nfxpnk.ge(id).innerHTML = req.responseText;
                
                newCss = req.responseText.replace(/\.\.\//g, "https://dev07-eu-nyr.demandware.net/on/demandware.static/Sites-nyr-Site/-/default/v1484041980136/");
                nfxpnk.ge(id).innerHTML = newCss;
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