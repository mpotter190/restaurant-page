/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantAboutPage = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    //create and append headline element\n    const headline = document.createElement('h1');\n    headline.textContent = \"About Us!\";\n    pageContent.appendChild(headline);\n\n    //create and append desc element\n    const desc = document.createElement('p');\n    desc.textContent = \"We do nothing here, we eat nothing here, we merely exist.\"\n    pageContent.appendChild(desc);\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantAboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nopenPage();\n\nconst menuButton = document.querySelector(\"#menu\");\nstartButton.addEventListener(\"click\", () => {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\nconst homeButton = document.querySelector(\"#home\");\nstartButton.addEventListener(\"click\", () => {\n    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nconst aboutButton = document.querySelector(\"about\");\nstartButton.addEventListener(\"click\", () => {\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantMenuPage = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    //create and append headline element\n    const headline = document.createElement('h1');\n    headline.textContent = \"Dinner Menu\";\n    pageContent.appendChild(headline);\n\n    //create and append menu items\n    const item1 = document.createElement('p');\n    item1.textContent = \"Screams $9.50\"\n    pageContent.appendChild(item1);\n    content.appendChild(pageContent);\n\n    const item2 = document.createElement('p');\n    item2.textContent = \"Void $12.99\"\n    pageContent.appendChild(item1);\n    content.appendChild(pageContent);\n\n    const item3 = document.createElement('p');\n    item3.textContent = \"Misery 23.50\"\n    pageContent.appendChild(item1);\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\nfunction openPage(){\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPage());\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?\n}");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//restaurant.js\n\nconst createRestaurantHomePage = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    //create and append image element\n    const image = document.createElement('img');\n    image.src = 'img.jpg';\n    image.height = '300'\n    pageContent.appendChild(image);\n\n    //create and append headline element\n    const headline = document.createElement('h1');\n    headline.textContent = \"Welcome to Maddie's Restaurant!\";\n    pageContent.appendChild(headline);\n\n    //create and append desc element\n    const desc = document.createElement('p');\n    desc.textContent = \"Welcome to Maddie's Restaurant-where we make absolutely nothing at all. Come here if you don't want to eat.\"\n    pageContent.appendChild(desc);\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?\n}");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;