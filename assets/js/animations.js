"use strict";

var heroBtn = document.querySelector(".hero-button"),
    callout = document.querySelector(".hero-callout"),
    logoText = document.querySelector("#logoText"),
    logo = document.querySelector(".logo"),
    preloader = document.querySelector("#preloader"),
    body = document.body || document.getElementsByTagName("body");



window.onload = function() {
	console.log(body);
	TweenLite.fromTo(body, 2, {opacity: 0, backgroundColor: "#000"}, {opacity: 1, backgroundColor: "none", ease: Sine.easeOut});
	TweenLite.fromTo(logo, 1.5, {marginTop: "-1000px", opacity: 0}, {marginTop: "0px", opacity: 1, ease: Sine.easeOut});
	TweenLite.fromTo(logoText, 3, {marginRight: "1000px", opacity: 0}, {marginRight: "0px", opacity: 1, ease: Power4.easeInOut});
	TweenLite.fromTo(heroBtn, 2, {left: "-1000px", opacity: 0}, {left: "0px", opacity: 1, ease: Power4.easeInOut});
	TweenLite.fromTo(callout, 2, {marginLeft: "1000px", rotation: 0, opacity: 0}, {marginLeft: "0px", opacity: 1, rotation: 360, ease: Power4.easeInOut});
}










