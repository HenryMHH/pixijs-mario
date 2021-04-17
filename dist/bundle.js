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

/***/ "./assets/mario.png":
/*!**************************!*\
  !*** ./assets/mario.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mario.png\");\n\n//# sourceURL=webpack:///./assets/mario.png?");

/***/ }),

/***/ "./background/background.js":
/*!**********************************!*\
  !*** ./background/background.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ background)\n/* harmony export */ });\nfunction background(app) {\r\n\tapp.loader\r\n\t\t.add('mario', 'assets/background.jpg')\r\n\t\t.load((loader, resources) => {})\r\n}\r\n\n\n//# sourceURL=webpack:///./background/background.js?");

/***/ }),

/***/ "./charactor/mario.js":
/*!****************************!*\
  !*** ./charactor/mario.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mario)\n/* harmony export */ });\nfunction mario(app, { left, right, jump }) {\r\n\tapp.loader.add('mario', 'assets/mario.png').load((loader, resources) => {\r\n\t\tconst mario = new PIXI.Sprite(resources.mario.texture)\r\n\r\n\t\tmario.width = 50\r\n\t\tmario.height = 50\r\n\r\n\t\tmario.x = 50\r\n\t\tmario.y = window.innerHeight - 100\r\n\t\tmario.vx = 0\r\n\t\tmario.vy = 0\r\n\r\n\t\t// mario.anchor.x = 0.5\r\n\t\t// mario.anchor.y = 0.5\r\n\r\n\t\tapp.stage.addChild(mario)\r\n\r\n\t\tleft.press = () => {\r\n\t\t\tmario.vx = -3\r\n\t\t\t//mario.vy = 0\r\n\t\t}\r\n\r\n\t\tleft.release = () => {\r\n\t\t\t//If the left arrow has been released, and the right arrow isn't down,\r\n\t\t\t//and the cat isn't moving vertically:\r\n\t\t\t//Stop the cat\r\n\t\t\tif (!right.isDown && mario.vy === 0) {\r\n\t\t\t\tmario.vx = 0\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tright.press = () => {\r\n\t\t\tmario.vx = 3\r\n\t\t\t//mario.vy = 0\r\n\t\t}\r\n\r\n\t\tright.release = () => {\r\n\t\t\t//If the left arrow has been released, and the right arrow isn't down,\r\n\t\t\t//and the cat isn't moving vertically:\r\n\t\t\t//Stop the cat\r\n\t\t\tif (!left.isDown && mario.vy === 0) {\r\n\t\t\t\tmario.vx = 0\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tjump.press = () => {\r\n\t\t\t//mario.vx = 0\r\n\t\t\t// if (\r\n\t\t\t// \t(mario.y === window.innerHeight - 100 && !left.isDown) ||\r\n\t\t\t// \t(mario.y === window.innerHeight - 100 && !right.isDown)\r\n\t\t\t// ) {\r\n\t\t\t// \tmario.vx = 0\r\n\t\t\t// }\r\n\t\t\tif (mario.y === window.innerHeight - 100) {\r\n\t\t\t\tmario.vy = -4\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tjump.release = () => {\r\n\t\t\t// mario.vx = 0\r\n\r\n\t\t\tmario.vy = 4\r\n\t\t}\r\n\t\t// Listen for frame updates\r\n\t\tapp.ticker.add((d) => {\r\n\t\t\t// each frame we spin the bunny around a bit\r\n\t\t\t//bunny.rotation += 0.01\r\n\t\t\tif (mario.y > window.innerHeight - 100) {\r\n\t\t\t\tmario.vy = 0\r\n\t\t\t\tmario.y = window.innerHeight - 100\r\n\r\n\t\t\t\tif (jump.isDown && !right.isDown && !left.isDown) {\r\n\t\t\t\t\tmario.vx = 0\r\n\t\t\t\t}\r\n\t\t\t\tif (!jump.isDown && !right.isDown && !left.isDown) {\r\n\t\t\t\t\tmario.vx = 0\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (mario.y < window.innerHeight - 200) {\r\n\t\t\t\tmario.vy = 4\r\n\t\t\t}\r\n\r\n\t\t\tgameLoop(d)\r\n\t\t})\r\n\t\tlet state = play\r\n\t\tfunction gameLoop(delta) {\r\n\t\t\t//Update the current game state:\r\n\r\n\t\t\tstate(delta)\r\n\t\t}\r\n\r\n\t\tfunction play(delta) {\r\n\t\t\t//Use the cat's velocity to make it move\r\n\t\t\tmario.x += mario.vx\r\n\t\t\tmario.y += mario.vy\r\n\t\t}\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack:///./charactor/mario.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./assets/mario.png */ \"./assets/mario.png\")\r\n__webpack_require__(/*! ./index.js */ \"./index.js\")\r\n__webpack_require__(/*! ./assets/background.jpg */ \"./assets/background.jpg\")\r\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charactor_mario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charactor/mario */ \"./charactor/mario.js\");\n/* harmony import */ var _movement_movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement/movement */ \"./movement/movement.js\");\n/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/background */ \"./background/background.js\");\n\r\n\r\n\r\n\r\nconst app = new PIXI.Application()\r\ndocument.body.appendChild(app.view)\r\napp.renderer.view.style.position = 'absolute'\r\napp.renderer.view.style.display = 'block'\r\napp.renderer.autoResize = true\r\napp.renderer.resize(window.innerWidth, window.innerHeight)\r\n// load the texture we need\r\n;(0,_charactor_mario__WEBPACK_IMPORTED_MODULE_0__.default)(app, (0,_movement_movement__WEBPACK_IMPORTED_MODULE_1__.default)())\r\n;(0,_background_background__WEBPACK_IMPORTED_MODULE_2__.default)(app)\r\n\n\n//# sourceURL=webpack:///./index.js?");

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