// ==UserScript==
// @name        YouTube Scroll Wheel Mute
// @icon        https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg
// @namespace   https://github.com/yusa-ai
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.0.1
// @author      yusa-ai
// @license     MIT
// @description Toggles player mute state on mouse middle (scroll wheel) click
// @require     https://gitcdn.link/repo/fuzetsu/userscripts/b38eabf72c20fa3cf7da84ecd2cefe0d4a2116be/wait-for-elements/wait-for-elements.js
// @updateURL   https://raw.githubusercontent.com/yusa-ai/youtube-scroll-wheel-mute/main/youtube-scroll-wheel-mute.user.js
// @downloadURL https://raw.githubusercontent.com/yusa-ai/youtube-scroll-wheel-mute/main/youtube-scroll-wheel-mute.user.js
// @supportURL  https://github.com/yusa-ai/youtube-scroll-wheel-mute/issues
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
