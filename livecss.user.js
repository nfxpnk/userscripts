// ==UserScript==
// @name        Live CSS
// @namespace   nfxpnk
// @include     http://dev30.store.adidasgroup.demandware.net/s/adidas-GB/*
// @version     3
// @downloadURL https://raw.githubusercontent.com/nfxpnk/gm_scripts/master/livecss.user.js
// @updateURL   https://raw.githubusercontent.com/nfxpnk/gm_scripts/master/livecss.user.js
// @grant       none
// ==/UserScript==

var nfxpnk = {
	onPause: true,
	updateTime: 3000,
	filesToUpdate: ['style1.css', 'style2.css'],
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

		css = '.nfxpnkPause {width:24px; height:24px; box-sizing:content-box; background-color:#fff; display:block; position:fixed; right:10px; top:10px; font-size:0; z-index:9999; border:4px solid red;}';
		css += '.nfxpnkPauseOn {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVRIS7WW/TEEQRDF30VACC4CRIAIEAEi4CJABIgAESACLgJEgAzuIqB+Vd1bbXd6duqUrro/bj7e6379MTtR3TYk7Us6kLQlad2OLyS9SXqU9CTpM4OZJBsAn0s6HnHAt+8kXZaISgSAXgVvAXmX9CIJzzEi2ZW0GRxgbyYJss76BIDfhv0bSdcVCYj0TNJpuHMSSSJBBF+a7njdYkRDPtbscEfiBHjyaqEDzn+Xo4XAZSPZkHB3m8idAN2ODGnP9G4FjueI5NkW7ikSCPD2wxbRHE37RolSli1GzjwnUwgApGqwaZLQb1tH27G8RIdnEHBhx0oRT0sGgRvnIUqby6KlhOcQkBASk8kDcCRwogu7UyoGl2kBgV+mE7k0FkHcB5xoKNFo4DAJ9FcCMEqO/SJYVaK5FUipulyiZUwyB2mOMYm+DLgvS7wHVpfk1jKlw/GMX63LB2Xa0mi8B3hVK02PYNBobPzrqICAKPDQBxUdvcqwY+TwViAnTdsNO0jiuAb8sGEsuCwMuYfwSA3GtR/sPzjoSYdn2hM5gy0OyPTBiSQA++PBOvKVnsw4u5AFouqT6SR4Rjf6G5G0R7fM7Of8INLsqyISUaL+2eJR4a1/ttBwafn+AIVsgZYS/Fn2AAAAAElFTkSuQmCC);}';
		css += '.nfxpnkPauseOff {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwUlEQVRIS72WjTEDYRCGn1SADqgAFaACVIAOpAJUQAeogFQQKpBUgA6iAuYxuzdfkrvLTUJ25ibJd/vtuz/v7qZHu2wDx8Ah4Pe9UB8BH8ALMIjvtZZ6DfY1dgWcL3AgXz8AN3VAdQAnwD2wGbe/gGdAr30UI/FRdyPOJsBF6FZ+zQLoscaVT+Aa0Ls28c5dASRIdacE0JunsDSOvOtVFzFa67EbyqcZSQKY87dIi8azmF2MlzqmUBAd27cmCWBIZ5EWjXf1fNYBI5Fd1uVRkgig9++hOZW/SNNBvHuNNPhT2tad+66s444Al8AtIFuSOemZRZauijT0t9J0nvfMgFH0BZCCNtNvSDMxLwuQKR8IkIXpB91KjGUBMisjAb7D4lGR41VTZI2GGlkLwH+maLyWImdBpNbWH7FoiqaLGs2CKc4an2y0uvPaRvMweWubO0NWGRVOBRu2GhUCGIXFtvv8FGQZScI4FbQ5aRrXKtoXXSPRY3mfU3huXKe35aDSuAQw1DbxjrMs51jjwkkjLh5rUq7CtpVZrlbB1K2kbek7h9wRXcQo1ZckU9IEkEoWyojyb0uuRLde/m3R4znDaeAHwTOQNuKQfvoAAAAASUVORK5CYII=);}';

		head = document.getElementsByTagName('head')[0];
		style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);

		var newElement = document.createElement('a');
		newElement.setAttribute('href', '#');
		newElement.setAttribute('class', 'nfxpnkPause nfxpnkPause' + (nfxpnk.onPause ? 'On' : 'Off'));

		newElement.appendChild(document.createTextNode('button'));
		
		newElement.onclick = function(e) {
			if(nfxpnk.onPause) {
				nfxpnk.onPause = false;
				this.className = 'nfxpnkPause nfxpnkPauseOff';
			} else {
				nfxpnk.onPause = true;
				this.className = 'nfxpnkPause nfxpnkPauseOn';
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
			}
		}
		req.open('GET', href + nfxpnk.param +'=' + new Date().getMilliseconds(), true);
		req.send();
	},
	main: function() {
		var links = document.getElementsByTagName('link');

		for (var x = 0; x < links.length; ++x) {
			if(links[x].type != 'text/css') continue;

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