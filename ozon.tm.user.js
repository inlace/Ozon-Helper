// ==UserScript==
// @name        Ozon Helper
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description Показывает остатки товара в корзине
// @author      Nudzh
// @match       *://www.ozon.ru/cart
// @run-at		document-end
// @grant       unsafeWindow
// @grant       window.close
// @date		2020-10-26
// @updateURL	https://github.com/inlace/Ozon-Helper/raw/main/ozon.tm.user.js
// ==/UserScript==

function calculate() {

	const body = document.getElementsByTagName('body')[0].innerHTML
	const max = [...body.matchAll(/maxQuantity&quot;:(\d+),/g)]
	const selector = document.querySelectorAll('.a8h4')

	for (var i = 0; i < selector.length; i++) {
		if (max[i][1] > 1) {
			selector[i].innerHTML += `Осталось ${max[i][1]} шт.`
		}
	}
}

setTimeout(calculate, 2000);
