/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/background.jpg":
/*!*******************************!*\
  !*** ./assets/background.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/background.jpg\");\n\n//# sourceURL=webpack:///./assets/background.jpg?");

/***/ }),

/***/ "./assets/mario-sit-l.png":
/*!********************************!*\
  !*** ./assets/mario-sit-l.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mario-sit-l.png\");\n\n//# sourceURL=webpack:///./assets/mario-sit-l.png?");

/***/ }),

/***/ "./assets/mario-sit-r.png":
/*!********************************!*\
  !*** ./assets/mario-sit-r.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mario-sit-r.png\");\n\n//# sourceURL=webpack:///./assets/mario-sit-r.png?");

/***/ }),

/***/ "./assets/mario-standing-l.png":
/*!*************************************!*\
  !*** ./assets/mario-standing-l.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mario-standing-l.png\");\n\n//# sourceURL=webpack:///./assets/mario-standing-l.png?");

/***/ }),

/***/ "./assets/mario-standing-r.png":
/*!*************************************!*\
  !*** ./assets/mario-standing-r.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mario-standing-r.png\");\n\n//# sourceURL=webpack:///./assets/mario-standing-r.png?");

/***/ }),

/***/ "./background/background.js":
/*!**********************************!*\
  !*** ./background/background.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Background)\n/* harmony export */ });\nfunction Background(app, rescources) {\r\n\tconst background = new PIXI.Sprite(rescources.texture)\r\n\tbackground.width = 1000\r\n\tbackground.height = 700\r\n\r\n\tapp.stage.addChildAt(background, 0)\r\n}\r\n\n\n//# sourceURL=webpack:///./background/background.js?");

/***/ }),

/***/ "./charactor/mario.js":
/*!****************************!*\
  !*** ./charactor/mario.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mario)\n/* harmony export */ });\nfunction Mario(\r\n\tapp,\r\n\tcharactorRescources,\r\n\t{ left, right, jump, down }\r\n) {\r\n\tconst mario = new PIXI.Sprite(\r\n\t\tcharactorRescources['assets/mario-standing-r.png'].texture\r\n\t)\r\n\r\n\t//const mario = PIXI.Sprite.from('assets/mario-standing-r.png')\r\n\tconst ground = window.innerHeight - 165\r\n\t// mario.width = 50\r\n\t// mario.height = 50\r\n\r\n\tmario.x = 50\r\n\tmario.y = ground\r\n\tmario.vx = 0\r\n\tmario.vy = 0\r\n\r\n\tapp.stage.addChildAt(mario, 0)\r\n\r\n\tleft.press = () => {\r\n\t\tmario.texture = charactorRescources['assets/mario-standing-l.png'].texture\r\n\t\t//PIXI.Texture.from('assets/mario-standing-l.png')\r\n\t\tmario.vx = -6\r\n\t\t//mario.vy = 0\r\n\t}\r\n\r\n\tleft.release = () => {\r\n\t\tif (!right.isDown && mario.vy === 0) {\r\n\t\t\tmario.vx = 0\r\n\t\t}\r\n\t}\r\n\r\n\tright.press = () => {\r\n\t\tmario.texture = charactorRescources['assets/mario-standing-r.png'].texture\r\n\t\tmario.vx = 6\r\n\r\n\t\t//mario.vy = 0\r\n\t}\r\n\r\n\tright.release = () => {\r\n\t\tif (!left.isDown && mario.vy === 0) {\r\n\t\t\tmario.vx = 0\r\n\t\t}\r\n\t}\r\n\r\n\tdown.press = () => {\r\n\t\tif (\r\n\t\t\tmario.texture ===\r\n\t\t\tcharactorRescources['assets/mario-standing-l.png'].texture\r\n\t\t) {\r\n\t\t\tmario.texture = charactorRescources['assets/mario-sit-l.png'].texture\r\n\t\t}\r\n\t\tif (\r\n\t\t\tmario.texture ===\r\n\t\t\tcharactorRescources['assets/mario-standing-r.png'].texture\r\n\t\t) {\r\n\t\t\tmario.texture = charactorRescources['assets/mario-sit-r.png'].texture\r\n\t\t}\r\n\t}\r\n\r\n\tdown.release = () => {\r\n\t\tif (\r\n\t\t\tmario.texture === charactorRescources['assets/mario-sit-l.png'].texture\r\n\t\t) {\r\n\t\t\tmario.texture = charactorRescources['assets/mario-standing-l.png'].texture\r\n\t\t}\r\n\r\n\t\tif (\r\n\t\t\tmario.texture === charactorRescources['assets/mario-sit-r.png'].texture\r\n\t\t) {\r\n\t\t\tmario.texture = charactorRescources['assets/mario-standing-r.png'].texture\r\n\t\t}\r\n\t}\r\n\r\n\tjump.press = () => {\r\n\t\tif (mario.y === ground) {\r\n\t\t\tmario.vy = -8\r\n\t\t}\r\n\t}\r\n\r\n\tjump.release = () => {\r\n\t\tmario.vy = 8\r\n\t}\r\n\r\n\tlet time = Number()\r\n\tapp.ticker.add((d) => {\r\n\t\tif (mario.y > ground) {\r\n\t\t\tmario.vy = 0\r\n\t\t\tmario.y = ground\r\n\r\n\t\t\tif (jump.isDown && !right.isDown && !left.isDown) {\r\n\t\t\t\tmario.vx = 0\r\n\t\t\t}\r\n\t\t\tif (!jump.isDown && !right.isDown && !left.isDown) {\r\n\t\t\t\tmario.vx = 0\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (mario.x >= 950) {\r\n\t\t\tmario.x = 950\r\n\t\t}\r\n\r\n\t\tif (mario.x <= 0) {\r\n\t\t\tmario.x = 0\r\n\t\t}\r\n\r\n\t\tif (mario.y < ground - 150) {\r\n\t\t\tmario.vy = 8\r\n\t\t}\r\n\r\n\t\tgameLoop()\r\n\t})\r\n\tlet state = play\r\n\tfunction gameLoop(delta) {\r\n\t\tstate(delta)\r\n\t}\r\n\r\n\tfunction play(delta) {\r\n\t\tmario.x += mario.vx\r\n\t\tmario.y += mario.vy\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./charactor/mario.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./assets/mario-standing-r.png */ \"./assets/mario-standing-r.png\")\r\n__webpack_require__(/*! ./assets/mario-standing-l.png */ \"./assets/mario-standing-l.png\")\r\n__webpack_require__(/*! ./assets/mario-sit-l.png */ \"./assets/mario-sit-l.png\")\r\n__webpack_require__(/*! ./assets/mario-sit-r.png */ \"./assets/mario-sit-r.png\")\r\n__webpack_require__(/*! ./index.js */ \"./index.js\")\r\n__webpack_require__(/*! ./assets/background.jpg */ \"./assets/background.jpg\")\r\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charactor_mario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charactor/mario */ \"./charactor/mario.js\");\n/* harmony import */ var _movement_movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement/movement */ \"./movement/movement.js\");\n/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/background */ \"./background/background.js\");\n\r\n\r\n\r\n\r\nconst app = new PIXI.Application()\r\ndocument.body.appendChild(app.view)\r\napp.renderer.view.style.position = 'absolute'\r\napp.renderer.view.style.display = 'block'\r\napp.renderer.autoResize = true\r\napp.renderer.resize(1000, 700)\r\n// load the texture we need\r\n\r\napp.loader\r\n\t.add([\r\n\t\t'assets/mario-standing-r.png',\r\n\t\t'assets/mario-standing-l.png',\r\n\t\t'assets/background.jpg',\r\n\t\t'assets/mario-sit-l.png',\r\n\t\t'assets/mario-sit-r.png',\r\n\t])\r\n\t.load((loader, resources) => {\r\n\t\t;(0,_charactor_mario__WEBPACK_IMPORTED_MODULE_0__.default)(app, resources, (0,_movement_movement__WEBPACK_IMPORTED_MODULE_1__.default)())\r\n\t\t;(0,_background_background__WEBPACK_IMPORTED_MODULE_2__.default)(app, resources['assets/background.jpg'])\r\n\t})\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./movement/movement.js":
/*!******************************!*\
  !*** ./movement/movement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ movement)\n/* harmony export */ });\nfunction movement() {\r\n\tlet left = keyboard('ArrowLeft'),\r\n\t\tup = keyboard('ArrowUp'),\r\n\t\tright = keyboard('ArrowRight'),\r\n\t\tdown = keyboard('ArrowDown'),\r\n\t\tjump = keyboard(' ')\r\n\r\n\treturn { left, up, right, down, jump }\r\n}\r\n\r\nfunction keyboard(value) {\r\n\tlet key = {}\r\n\tkey.value = value\r\n\tkey.isDown = false\r\n\tkey.isUp = true\r\n\tkey.press = undefined\r\n\tkey.release = undefined\r\n\r\n\tkey.downHandler = (event) => {\r\n\t\tif (event.key === key.value) {\r\n\t\t\tif (key.isUp && key.press) key.press()\r\n\t\t\tkey.isDown = true\r\n\t\t\tkey.isUp = false\r\n\t\t\tevent.preventDefault()\r\n\t\t}\r\n\t}\r\n\r\n\tkey.upHandler = (event) => {\r\n\t\tif (event.key === key.value) {\r\n\t\t\tif (key.isDown && key.release) key.release()\r\n\t\t\tkey.isDown = false\r\n\t\t\tkey.isUp = true\r\n\t\t\tevent.preventDefault()\r\n\t\t}\r\n\t}\r\n\r\n\tconst downListener = key.downHandler.bind(key)\r\n\tconst upListener = key.upHandler.bind(key)\r\n\r\n\twindow.addEventListener('keydown', downListener, false)\r\n\twindow.addEventListener('keyup', upListener, false)\r\n\r\n\tkey.unsubscribe = () => {\r\n\t\twindow.removeEventListener('keydown', downListener)\r\n\t\twindow.removeEventListener('keyup', upListener)\r\n\t}\r\n\r\n\treturn key\r\n}\r\n\n\n//# sourceURL=webpack:///./movement/movement.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./entry.js");
/******/ 	
/******/ })()
;