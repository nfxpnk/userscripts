// ==UserScript==
// @name        DW Live CSS
// @namespace   dwlcss
// @version     1
// @grant       none
// ==/UserScript==

//, 'styles.css', 'checkout.css'
var nfxpnk = {
    onPause: true,
    updateTime: 3000,
    filesToUpdate: ['allinone.css', 'checkout.css', 'style.css', 'print.css'],
    param: '?nfxpnk',

    ge: function (elementId) {
        return document.getElementById(elementId);
    },
    getCssFileFromHref: function (string) {
        string = string.substring(string.lastIndexOf('/') + 1);
        string = string.split(nfxpnk.param);
        return string[0];
    },
    getUrlFromHref: function (string) {
        string = string.split(nfxpnk.param);
        return string[0];
    },
    isFileToUpdate: function (string) {
        var file = nfxpnk.getCssFileFromHref(string);
        for (var i = 0; i < nfxpnk.filesToUpdate.length; ++i) {
            if (file == nfxpnk.filesToUpdate[i]) {
                return true;
            }
        }
        return false;
    },
    main: function () {
        console.log('temper');
        var links = document.getElementsByTagName('link');

        for (var x = 0; x < links.length; ++x) {
            if (links[x].rel != 'stylesheet') continue;

            if (links[x].getAttribute('data') === null) {
                links[x].setAttribute('data', links[x].href);
            }

            var href = links[x].getAttribute('data');

            if (nfxpnk.isFileToUpdate(href)) {
                var fileNameId = nfxpnk.getCssFileFromHref(href);
                links[x].setAttribute('href', 'https://127.0.0.1:8081/css/' + fileNameId);
            }
        }

        var head = document.getElementsByTagName('head')[0];
        var newElement = document.createElement('script');
        newElement.setAttribute('src', 'https://127.0.0.1:9000/livereload.js?snipver=1');
        head.appendChild(newElement);
    },
};

nfxpnk.main();
