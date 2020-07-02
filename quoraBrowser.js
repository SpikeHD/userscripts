// ==UserScript==
// @name         Quora Browser
// @namespace    http://tampermonkey.net/
// @version      1.1
// @author       SpikeGD
// @include      https://www.quora.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

/**
 * Honestly, I'm not one to use Quora much. Sometimes I Google a topic I'm curious about and it
 * comes up though. If you've ever used to before, you may notice the related questions area
 * that will show... well... related questions. If you've ever clicked on one though, it will
 * blur the page and ask you to sign up. The easiest way to get around this is to add
 * "?share=1" to the end of the URL, which is what it does when you click on a link to
 * a question via Google or something.
 */

(function () {
  if(!window.location.href.includes("share=1")) {
		window.location = window.location + "?share=1"
  }
})()