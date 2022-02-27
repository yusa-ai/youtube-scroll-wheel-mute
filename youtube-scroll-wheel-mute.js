// ==UserScript==
// @name        YouTube Scroll Wheel Mute
// @namespace   Ryan Malonzo
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      yusa-ai
// @description Toggles player mute state on mouse middle (scroll wheel) click
// @require https://gitcdn.link/repo/fuzetsu/userscripts/b38eabf72c20fa3cf7da84ecd2cefe0d4a2116be/wait-for-elements/wait-for-elements.js
// ==/UserScript==

(() => {
	"use strict";

	waitForElems({
		sel: "ytd-player",
		onmatch(node) {
			node.onmousedown = (e) => {
				if (e.which === 2) {
					// middle click
					e.preventDefault();
					const player = node.getPlayer();
					player.isMuted() ? player.unMute() : player.mute();
				}
			};
		},
	});
})();
