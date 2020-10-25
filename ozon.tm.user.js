// ==UserScript==
// @name         Ozon Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Показывает остатки товара в корзине
// @author       Nudzh
// @match        *://www.ozon.ru/context/*
// @match        *://www.ozon.ru/product/*
// @match        *://www.ozon.ru/cart
// @run-at		 document-end
// @grant        unsafeWindow
// @grant        window.close
// @date		2020-10-26
// @updateURL	https://github.com/inlace/Ozon-Helper/raw/main/userscript.js
// ==/UserScript==

(function() {
    'use strict';
    const html = document.getElementsByTagName('head')[0].innerHTML
    const body = document.getElementsByTagName('body')[0].innerHTML
    //const id = html.match(/"sku":"(.*)"}</)[1]
    const max = [...body.matchAll(/maxQuantity&quot;:(\d+),/g)]

    function calculate() {
        for (var i = 0; i < document.querySelectorAll('.a8h4').length; i++) {
            if (max[i][1] > 1) {
                document.querySelectorAll('.a8h4')[i].innerHTML += "Осталось " + max[i][1] + "  шт."
            }
        }
    }
    setTimeout(calculate, 2000);
})();
