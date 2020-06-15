// ==UserScript==
// @name         eBay price+shipping calculator
// @namespace    http://tampermonkey.net/
// @version      1.1
// @author       SpikeGD
// @include 		 https://www.ebay.ca/*
// @require 		 https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

/**
 * I found that I would frequently browse eBay, find something at a fantastic price, 
 * and then realize once I've gotten myself excited that the shipping is like, $150.
 * 
 * I found that really annoying, so I wrote this script that will auto-add the grey,
 * hard-to-see shipping price to the main price so I can *actually* tell at a glance
 * whether a price is good or not. It still keeps the shipping price there at the bottom
 * if you want to see what it was, just in case, but it now says "Shipping was $XX.XX"
 */

(function () {
  var list = $('#ListViewInner').length > 0 ?  $('#ListViewInner'):$('.srp-results')
  console.log(list)
  function getShipping(val) {
		var shipping = $(val).find('.lvshipping').text().trim() || $(val).find('.s-item__shipping').text().trim()
  	return shipping.replace(/^\D+/g, '').replace(',', '')
	}
  
  function getPrice(val) {
  	var price = $(val).find('.lvprice').text().trim() || $(val).find('.s-item__price').text().trim()
  	return price.replace(/^\D+/g, '').replace(',', '')
  }

	list.children('li').each((i, val) => {
    var shipObj = $(val).find('.lvshipping').length > 0 ? $(val).find('.lvshipping'):$(val).find('.s-item__shipping')
    var priceObj = $(val).find('.lvprice').length > 0 ? $(val).find('.lvprice'):$(val).find('.s-item__price')
    
    var currency = $(val).find('.lvprice').text().trim().split('$')[0]
		var price = parseFloat(getPrice(val))
    var shipping = parseFloat(getShipping(val))
    
    if(shipping) {
    	console.log('Shipping: ' + shipping)
			console.log('Price: ' + price)
			$(shipObj).text(`Shipping was: $${shipping}`)
      $(priceObj).text(`${currency} $${Math.round((price+shipping + Number.EPSILON) * 100)/100}`)
    }
  })
})()