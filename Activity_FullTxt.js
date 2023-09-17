// ==UserScript==
// @name         GD Activity Full text
// @author       Meri
// @match        https://drive.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your custom CSS
    const customCSS = `
        .QRc8Jf {
            align-items: center;
            border-radius: inherit;
            box-sizing: border-box;
            cursor: inherit;
            display: flex;
            height: inherit;
            outline: none;
        }

        .s85kqe {
            font: var(--dt-title-small-font,500 .875rem/1.25rem "Google Sans"),"Google Sans",Roboto,Arial,sans-serif;
            letter-spacing: var(--dt-title-small-spacing,.0178571429em);
            display: block;
            margin-left: 5.625rem;
            overflow-x: visible !important;
            text-decoration: none !important;
            text-overflow: unset !important;
            white-space: normal !important;
            color: var(--dt-on-surface-variant,rgb(95,99,104));
        }

        .ZkrXVe {
            white-space: normal !important; /* Add text wrap */
            display: inline-block !important; /* Make the box resize with the text */
        }

        .s85kqe .QRc8Jf .ZkrXVe {
            white-space: normal !important; /* Add text wrap */
            display: inline-block !important; /* Make the box resize with the text */
        }

        .atObcb {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-left: 3.75rem;
            white-space: normal !important; /* Allow text wrap */
        }

        .NWlIHc {
            height: auto !important; /* Set height to auto */
        }

        .N6absb.YvL7re {
            width: auto;
        }

    `;

    // Apply the custom CSS
    GM_addStyle(customCSS);
})();
