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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cTeacher: () => (/* binding */ cTeacher),\n/* harmony export */   cpp: () => (/* binding */ cpp),\n/* harmony export */   java: () => (/* binding */ java),\n/* harmony export */   react: () => (/* binding */ react)\n/* harmony export */ });\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ \"./js/subjects/Cpp.ts\");\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ \"./js/subjects/Java.ts\");\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ \"./js/subjects/React.ts\");\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();\nvar java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__.Java();\nvar react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__.React();\nvar cTeacher = {\n    experienceTeachingC: 10\n};\nconsole.log('C++');\ncpp.setTeacher(cTeacher);\nconsole.log(cpp.getRequirements());\nconsole.log(cpp.getAvailableTeacher());\nconsole.log('Java');\njava.setTeacher(cTeacher);\nconsole.log(java.getRequirements());\nconsole.log(java.getAvailableTeacher());\nconsole.log('React');\nreact.setTeacher(cTeacher);\nconsole.log(react.getRequirements());\nconsole.log(react.getAvailableTeacher());\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ (function() {

eval("\n/// <reference path=\"./Teacher.ts\" />\n/// <reference path=\"./Subject.ts\" />\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var Cpp = /** @class */ (function (_super) {\n        __extends(Cpp, _super);\n        function Cpp() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        Cpp.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for Cpp';\n        };\n        Cpp.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {\n                return \"Available Teacher: \".concat(this.teacher.firstName);\n            }\n            return 'No available teacher';\n        };\n        return Cpp;\n    }(Subjects.Subject));\n    Subjects.Cpp = Cpp;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack://task_0/./js/subjects/Cpp.ts?");

/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ (function() {

eval("\n/// <reference path = \"./Teacher.ts\"/>\n/// <reference path = \"./Subject.ts\"/>\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var javaClass = /** @class */ (function (_super) {\n        __extends(javaClass, _super);\n        function javaClass() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        javaClass.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for Java';\n        };\n        javaClass.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {\n                return \"Available Teacher: \".concat(this.teacher.firstName);\n            }\n            else {\n                return 'No available teacher';\n            }\n        };\n        return javaClass;\n    }(Subjects.Subject));\n    Subjects.javaClass = javaClass;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack://task_0/./js/subjects/Java.ts?");

/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ (function() {

eval("\n/// <reference path = \"./Teacher.ts\"/>\n/// <reference path = \"./Subject.ts\"/>\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Subjects;\n(function (Subjects) {\n    var React = /** @class */ (function (_super) {\n        __extends(React, _super);\n        function React() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        React.prototype.getRequirements = function () {\n            return 'Here is the list of requirements for React';\n        };\n        React.prototype.getAvailableTeacher = function () {\n            if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {\n                return \"Available Teacher: \".concat(this.teacher.firstName);\n            }\n            else {\n                return 'No available teacher';\n            }\n        };\n        return React;\n    }(Subjects.Subject));\n    Subjects.React = React;\n})(Subjects || (Subjects = {}));\n\n\n//# sourceURL=webpack://task_0/./js/subjects/React.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.ts");
/******/ 	
/******/ })()
;