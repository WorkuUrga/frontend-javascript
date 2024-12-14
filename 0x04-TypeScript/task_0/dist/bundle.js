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
/***/ (() => {

eval("\nvar studentOne = {\n    firstName: 'Worku',\n    lastName: 'Dinegde',\n    age: 25,\n    location: 'Addis Ababa',\n};\nvar studentTwo = {\n    firstName: 'Bethel',\n    lastName: 'Dinegde',\n    age: 15,\n    location: 'Addis Ababa'\n};\nvar studentList = [studentOne, studentTwo];\nvar table = document.createElement('table');\nvar header = document.createElement('tr');\nheader.innerHTML = \"<th>First Name</th><th>Location</th>\";\ntable.appendChild(header);\nstudentList.forEach(function (student) {\n    var row = document.createElement('tr');\n    row.innerHTML = \"<td>\".concat(student.firstName, \"</td><td>\").concat(student.location, \"</td>\");\n    table.appendChild(row);\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;