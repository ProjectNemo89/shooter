/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// $(document).foundation();
	//Google map
	var map;
	var marker;
	var latLng = { lat: 44.574888, lng: 21.141979 };

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: latLng,
	    zoom: 12,
	    mapTypeId: 'hybrid'
	  });

	  marker = new google.maps.Marker({
	    position: latLng,
	    map: map,
	    title: 'Strelište'

	  });
	  marker.addListener('click', toggleBounce);
	}

	(function () {
	  //Navigation toggle
	  var navigation = $(".main-nav"),
	      body = $('body');

	  $(".hamburger").on('click', function () {
	    if (navigation.hasClass('is-open')) {
	      TweenLite.fromTo(navigation, 0.8, { right: "0", skewX: 10 }, { right: "-100%", skewX: 0, ease: Sine.easeIn });
	      navigation.removeClass('is-open');
	      body.removeClass('scroll-hidden');
	    } else {
	      navigation.addClass('is-open');
	      body.addClass('scroll-hidden');
	      TweenLite.fromTo(navigation, 0.8, { right: "-100%", skewX: 10 }, { right: "0", skewX: 0, ease: Sine.easeIn });
	    }
	  });

	  function removeAttribute(el, attr) {
	    el.removeAttr(attr);
	  }

	  var scene = document.getElementById('parallax');
	  var parallax = new Parallax(scene);
	  parallax.enable();
	  parallax.updateLayers(); // Useful for reparsing the layers in your scene if you change their data-depth value
	  parallax.calibrate(false, true);
	  parallax.invert(false, true);
	  parallax.limit(10, 10);
	  parallax.scalar(4, 8);
	  parallax.friction(0.2, 0.8);
	  parallax.origin(0.0, 1.0);
	})();

/***/ }
/******/ ]);