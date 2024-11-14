/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 622:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(622);
;// ./src/js/darkmode.js
/* harmony default export */ const darkmode = ((function() {
	if (!window.location.pathname.includes("settings.html")) return // guard clause

    if (window.matchMedia("(prefers-color-scheme: dark)").matches
    && localStorage.getItem("theme") !== "") {
        localStorage.setItem("theme", "darkmode")
    }

	const CTA_BUTTON = document.querySelector (".hero__button")
    CTA_BUTTON.addEventListener("click", clickHandler)

    function clickHandler(){
        const CLASS_LIST = document.body.classList
        document.body.classList.toggle("darkmode")
        localStorage.setItem("theme", CLASS_LIST.contains("darkmode")
         ? "darkmode"
        : "")
    }


    if(!localStorage.getItem("theme")){
        localStorage.setItem("theme", "")
    }

    if(localStorage.getItem("theme") === "darkmode") {
        CTA_BUTTON.checked = true
    }

    document.body.classList.add(localStorage.getItem("theme"))

})());

;// ./src/index.js


})();

/******/ })()
;
//# sourceMappingURL=main.js.map