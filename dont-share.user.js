// ==UserScript==
// @name         Remove CH Share button
// @namespace    https://github.com/CumpsD/ch-scripts
// @version      0.1
// @description  Remove useless share buttons
// @author       @cumpsd
// @homepage     hhttps://github.com/CumpsD/ch-scripts
// @updateURL    hhttps://github.com/CumpsD/ch-scripts/raw/main/dont-share.user.js
// @match        https://www.cryptohopper.com/dashboard
// @match        https://www.cryptohopper.com/trade-history
// @icon         https://www.google.com/s2/favicons?domain=cryptohopper.com
// @grant        none
// ==/UserScript==

try {
    // Only run this code on the intended page(s) (useful when @required in a parent script)
    if (['/dashboard', '/trade-history'].includes(window.location.pathname)) {
      (function () {
        'use strict';

        function dontShare() {
          jQuery('.fa-share-alt').parent().hide();
        }

        jQuery(() => {
            dontShare();

            jQuery(document).ajaxComplete(function () {
                dontShare();
            });
        });
      })();
    }
  } catch (err) {
    console.log(
      `Error in script dont-share.user.js: ${err.name}: ${err.message}`
    );
  }
