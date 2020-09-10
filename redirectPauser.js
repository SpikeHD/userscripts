// ==UserScript==
// @name         Redirect Pauser
// @namespace    http://tampermonkey.net/
// @version      1.1
// @author       SpikeGD
// @grant        none
// ==/UserScript==

window.addEventListener("beforeunload", function() { debugger; }, false)