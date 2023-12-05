/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General styles */

:root {
  --secondary-font-color: rgba(255, 255, 255, 0.6);
}

html {
  background-color: #0089a6;
}

body {
  background-image: linear-gradient(
    to bottom,
    #00abcf,
    #009aba,
    #0089a6,
    #007891,
    #00687e
  );
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 20px;
}

/* Page grid layout styles */

.wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr minmax(0px, 900px) 1fr;
  grid-template-rows: 60px 1fr 70px;
  align-items: center;
  justify-content: center;
}

.top-nav {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.main-container {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.footer {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

/* Search field */

.search-form {
  display: flex;
  justify-content: center;
}

.search-form input {
  background-color: #003945;
  height: 40px;
  outline: none;
  border: 2px solid #003945;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 10px 10px 16px;
  color: white;
  transition: border 0.3s;
  border-right: none !important;
  flex: 0 1 250px;
}

.search-form input::placeholder {
  color: var(--secondary-font-color);
}

.search-form input:focus {
  border-left: 2px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.search-form input:focus ~ button {
  border-right: 2px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.search-submit-button {
  margin-left: 0.5px;
  background-color: #003945;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  outline: none;
  border: 2px solid #003945;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left: none !important;
  cursor: pointer;
  transition: border 0.3s;
}

.svg-inline-submit {
  width: 20px;
}

/* Main container styles */

.location {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
}

.location > div {
  text-align: center;
}

.location > .city-country {
  font-size: 30px;
}

.location > .date-time {
  color: var(--secondary-font-color);
}

.current {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 50px);
}

.current > .condition-icon-container {
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  height: 100px;
  width: 100px;
}

.current > .condition-text {
  grid-column: 1 / 4;
  grid-row: 4 / 5;
  align-self: flex-start;
  /* justify-self: center; */
  font-size: 20px;
}

.current > .feels-like {
  grid-column: 1 / 4;
  grid-row: 4 / 5;
  font-size: 16px;
  align-self: flex-end;
  color: var(--secondary-font-color);
}

.current > .temperature {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  font-size: 70px;
  align-self: center;
  justify-self: center;
  font-weight: 300;
}

.current > .humidity-container {
  grid-column: 5 / 7;
  grid-row: 1 / 3;
}

.current > .cloudiness-container {
  grid-column: 7 / 8;
  grid-row: 1 / 3;
}

.current > .visibility-container {
  grid-column: 9 / 11;
  grid-row: 1 / 3;
}

.current > .sunrise-container {
  grid-column: 5 / 7;
  grid-row: 3 / 5;
}

.current > .sunset-container {
  grid-column: 7 / 9;
  grid-row: 3 / 5;
}

.current > .moon-illumination-container {
  grid-column: 9 / 11;
  grid-row: 3 / 5;
}

.current > .humidity-container,
.current > .cloudiness-container,
.current > .visibility-container,
.current > .sunrise-container,
.current > .sunset-container,
.current > .moon-illumination-container {
  align-self: center;
}

.current > .humidity-container > div:first-child,
.current > .cloudiness-container > div:first-child,
.current > .visibility-container > div:first-child,
.current > .sunrise-container > div:first-child,
.current > .sunset-container > div:first-child,
.current > .moon-illumination-container > div:first-child {
  font-size: 16px;
  color: var(--secondary-font-color);
}

.current > .humidity-container > div:last-child,
.current > .cloudiness-container > div:last-child,
.current > .visibility-container > div:last-child,
.current > .sunrise-container > div:last-child,
.current > .sunset-container > div:last-child,
.current > .moon-illumination-container > div:last-child {
  font-size: 20px;
  /* color: var(--secondary-font-color); */
}

svg {
  fill: whitesmoke;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA,mBAAmB;;AAEnB;EACE,gDAAgD;AAClD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;;;;;;;GAOC;AACH;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA,4BAA4B;;AAE5B;EACE,aAAa;EACb,iBAAiB;EACjB,iDAAiD;EACjD,iCAAiC;EACjC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,4BAA4B;EAC5B,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,4BAA4B;EAC5B,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,4BAA4B;EAC5B,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA,0BAA0B;;AAE1B;EACE,gBAAgB;EAChB,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;;;;;EAME,eAAe;EACf,kCAAkC;AACpC;;AAEA;;;;;;EAME,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:wght@100&family=Rubik:wght@300&display=swap\");\n\n/* General styles */\n\n:root {\n  --secondary-font-color: rgba(255, 255, 255, 0.6);\n}\n\nhtml {\n  background-color: #0089a6;\n}\n\nbody {\n  background-image: linear-gradient(\n    to bottom,\n    #00abcf,\n    #009aba,\n    #0089a6,\n    #007891,\n    #00687e\n  );\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: bold;\n  color: white;\n  font-size: 20px;\n}\n\n/* Page grid layout styles */\n\n.wrapper {\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: 1fr minmax(0px, 900px) 1fr;\n  grid-template-rows: 60px 1fr 70px;\n  align-items: center;\n  justify-content: center;\n}\n\n.top-nav {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.footer {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n/* Search field */\n\n.search-form {\n  display: flex;\n  justify-content: center;\n}\n\n.search-form input {\n  background-color: #003945;\n  height: 40px;\n  outline: none;\n  border: 2px solid #003945;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 10px 10px 10px 16px;\n  color: white;\n  transition: border 0.3s;\n  border-right: none !important;\n  flex: 0 1 250px;\n}\n\n.search-form input::placeholder {\n  color: var(--secondary-font-color);\n}\n\n.search-form input:focus {\n  border-left: 2px solid white;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n}\n\n.search-form input:focus ~ button {\n  border-right: 2px solid white;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n}\n\n.search-submit-button {\n  margin-left: 0.5px;\n  background-color: #003945;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  outline: none;\n  border: 2px solid #003945;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border-left: none !important;\n  cursor: pointer;\n  transition: border 0.3s;\n}\n\n.svg-inline-submit {\n  width: 20px;\n}\n\n/* Main container styles */\n\n.location {\n  margin-top: 40px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n}\n\n.location > div {\n  text-align: center;\n}\n\n.location > .city-country {\n  font-size: 30px;\n}\n\n.location > .date-time {\n  color: var(--secondary-font-color);\n}\n\n.current {\n  margin-top: 60px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n}\n\n.current > .condition-icon-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 5;\n  height: 100px;\n  width: 100px;\n}\n\n.current > .condition-text {\n  grid-column: 1 / 4;\n  grid-row: 4 / 5;\n  align-self: flex-start;\n  /* justify-self: center; */\n  font-size: 20px;\n}\n\n.current > .feels-like {\n  grid-column: 1 / 4;\n  grid-row: 4 / 5;\n  font-size: 16px;\n  align-self: flex-end;\n  color: var(--secondary-font-color);\n}\n\n.current > .temperature {\n  grid-column: 2 / 4;\n  grid-row: 2 / 4;\n  font-size: 70px;\n  align-self: center;\n  justify-self: center;\n  font-weight: 300;\n}\n\n.current > .humidity-container {\n  grid-column: 5 / 7;\n  grid-row: 1 / 3;\n}\n\n.current > .cloudiness-container {\n  grid-column: 7 / 8;\n  grid-row: 1 / 3;\n}\n\n.current > .visibility-container {\n  grid-column: 9 / 11;\n  grid-row: 1 / 3;\n}\n\n.current > .sunrise-container {\n  grid-column: 5 / 7;\n  grid-row: 3 / 5;\n}\n\n.current > .sunset-container {\n  grid-column: 7 / 9;\n  grid-row: 3 / 5;\n}\n\n.current > .moon-illumination-container {\n  grid-column: 9 / 11;\n  grid-row: 3 / 5;\n}\n\n.current > .humidity-container,\n.current > .cloudiness-container,\n.current > .visibility-container,\n.current > .sunrise-container,\n.current > .sunset-container,\n.current > .moon-illumination-container {\n  align-self: center;\n}\n\n.current > .humidity-container > div:first-child,\n.current > .cloudiness-container > div:first-child,\n.current > .visibility-container > div:first-child,\n.current > .sunrise-container > div:first-child,\n.current > .sunset-container > div:first-child,\n.current > .moon-illumination-container > div:first-child {\n  font-size: 16px;\n  color: var(--secondary-font-color);\n}\n\n.current > .humidity-container > div:last-child,\n.current > .cloudiness-container > div:last-child,\n.current > .visibility-container > div:last-child,\n.current > .sunrise-container > div:last-child,\n.current > .sunset-container > div:last-child,\n.current > .moon-illumination-container > div:last-child {\n  font-size: 20px;\n  /* color: var(--secondary-font-color); */\n}\n\nsvg {\n  fill: whitesmoke;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createDom = (() => {
  function defineStaticDomTree() {
    const DOMTree = [
      {
        elementType: "div",
        elementClass: "wrapper",
        childElements: [
          {
            elementType: "div",
            elementClass: "top-nav",
            childElements: [
              {
                elementType: "div",
                elementClass: "form-wrapper",
                childElements: [
                  {
                    elementType: "form",
                    elementClass: "search-form",
                    childElements: [
                      {
                        elementType: "label",
                        elementClass: "",
                        elementTextContent: "",
                        elementAttributes: [
                          {
                            attributeName: "for",
                            attributeValue: "search",
                          },
                        ],
                      },
                      {
                        elementType: "input",
                        elementClass: "",
                        elementAttributes: [
                          {
                            attributeName: "type",
                            attributeValue: "search",
                          },
                          {
                            attributeName: "id",
                            attributeValue: "search",
                          },
                          {
                            attributeName: "placeholder",
                            attributeValue: "Search location",
                          },
                        ],
                      },
                      {
                        elementType: "button",
                        elementClass: "search-submit-button",
                        elementInnerHTML: `<svg class="svg-inline-submit" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="white" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>`,
                        elementAttributes: [
                          {
                            attributeName: "type",
                            attributeValue: "submit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "footer",
          },
        ],
      },
    ];

    return DOMTree;
  }

  function defineDynamicDomTree(data) {
    const [date, time] = data.current.localTime.split(" ");

    const DOMTree = [
      {
        elementType: "div",
        elementClass: "main-container",
        childElements: [
          {
            elementType: "div",
            elementClass: "location",
            childElements: [
              {
                elementType: "div",
                elementClass: "city-country",
                elementTextContent: `${data.current.city}, ${data.current.country}`,
              },

              {
                elementType: "div",
                elementClass: "date-time",
                elementTextContent: `${date} | ${time}`,
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "today",
            childElements: [
              {
                elementType: "div",
                elementClass: "current",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "condition-icon-container",
                    elementInnerHTML: data.current.conditionIcon,
                  },
                  {
                    elementType: "div",
                    elementClass: "condition-text",
                    elementTextContent: data.current.conditionText,
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.current.tempC}°C`,
                  },
                  {
                    elementType: "div",
                    elementClass: "feels-like",
                    elementTextContent: `Feels like ${data.current.feelsLikeC}°C`,
                  },
                  {
                    elementType: "div",
                    elementClass: "humidity-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "humidity-label",
                        elementTextContent: `Humidity`,
                      },
                      {
                        elementType: "div",
                        elementClass: "humidity-value",
                        elementTextContent: `${data.current.humidity}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "visibility-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "visibility-label",
                        elementTextContent: `Visibility`,
                      },
                      {
                        elementType: "div",
                        elementClass: "visibility-value",
                        elementTextContent: `${data.current.visibility}km`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "cloudiness-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "cloudiness-label",
                        elementTextContent: `Cloudiness`,
                      },
                      {
                        elementType: "div",
                        elementClass: "cloudiness-value",
                        elementTextContent: `${data.current.cloudiness}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "moon-illumination-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "moon-illumination-label",
                        elementTextContent: `Moon Illumination`,
                      },
                      {
                        elementType: "div",
                        elementClass: "moon-illumination-value",
                        elementTextContent: `${data.current.moonIllumination}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "sunrise-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "sunrise-label",
                        elementTextContent: `Sunrise`,
                      },
                      {
                        elementType: "div",
                        elementClass: "sunrise-value",
                        elementTextContent: `${data.current.sunrise}`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "sunset-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "sunset-label",
                        elementTextContent: `Sunset`,
                      },
                      {
                        elementType: "div",
                        elementClass: "sunset-value",
                        elementTextContent: `${data.current.sunset}`,
                      },
                    ],
                  },
                ],
              },
              {
                elementType: "div",
                elementClass: "hourly-forecast",
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "daily-forecast",
            childElements: [
              {
                elementType: "div",
                elementClass: "day-one",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "date",
                    elementTextContent: data.forecast[0].date,
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-icon-container",
                        elementInnerHTML: data.forecast[0].conditionIcon,
                      },
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-text",
                        elementTextContent: data.forecast[0].conditionText,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[0].avgtemp_c}°C`,
                  },
                ],
              },
              {
                elementType: "div",
                elementClass: "day-two",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "date",
                    elementTextContent: data.forecast[1].date,
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-icon-container",
                        elementInnerHTML: data.forecast[1].conditionIcon,
                      },
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-text",
                        elementTextContent: data.forecast[1].conditionText,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[1].avgtemp_c}°C`,
                  },
                ],
              },
              {
                elementType: "div",
                elementClass: "day-three",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "date",
                    elementTextContent: data.forecast[2].date,
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-icon-container",
                        elementInnerHTML: data.forecast[2].conditionIcon,
                      },
                      {
                        elementType: "div",
                        elementClass: "forecast-condition-text",
                        elementTextContent: data.forecast[2].conditionText,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[2].avgtemp_c}°C`,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    return DOMTree;
  }

  function createDomElementsHelper(tree, parentElement) {
    tree.forEach((obj) => {
      const element = document.createElement(obj.elementType);
      if (obj.elementClass) {
        element.classList.add(obj.elementClass);
      }
      if (obj.elementAttributes) {
        obj.elementAttributes.forEach((att) => {
          element.setAttribute(att.attributeName, att.attributeValue);
        });
      }
      if (obj.elementTextContent) {
        element.textContent = obj.elementTextContent;
      }
      if (obj.elementInnerHTML) {
        element.innerHTML = obj.elementInnerHTML;
      }
      parentElement.append(element);

      if (obj.childElements) {
        createDomElementsHelper(obj.childElements, element);
      }
    });
  }

  // Create DOM elements based on the DOMTree
  function createStaticDomElements(tree, parentElement) {
    createDomElementsHelper(tree, parentElement);
  }

  function createDynamicDomElements(tree, parentElement) {
    createDomElementsHelper(tree, parentElement);
  }

  function deleteDynamicDomElements() {
    const existingWrapper = document.querySelector(".main-container");
    if (existingWrapper) {
      existingWrapper.remove();
    }
  }

  return {
    defineStaticDomTree,
    defineDynamicDomTree,
    createStaticDomElements,
    createDynamicDomElements,
    deleteDynamicDomElements,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDom);


/***/ }),

/***/ "./src/weatherDataModule.js":
/*!**********************************!*\
  !*** ./src/weatherDataModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");


// The module is responsible for extracting and displaying location data
const WeatherDataModule = (() => {
  function getIcon(code, isDay) {
    switch (code) {
      case 1000:
        if (isDay === 1) {
          return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M37,13.11A19.52,19.52,0,0,0,15.06,41.76a19,19,0,0,0,11.77,9,19.64,19.64,0,0,0,5.18.7,19.4,19.4,0,0,0,9.75-2.64,19.08,19.08,0,0,0,9-11.78A19.5,19.5,0,0,0,37,13.11ZM48.79,36.48a17.11,17.11,0,0,1-8,10.57,17.45,17.45,0,0,1-13.41,1.74,17.11,17.11,0,0,1-10.57-8A17.55,17.55,0,0,1,31.9,14.42a17.17,17.17,0,0,1,4.57.62A17.51,17.51,0,0,1,48.79,36.48Z"/><path d="M32,7.8a1,1,0,0,0,1-1V3.93a1,1,0,1,0-2,0V6.8A1,1,0,0,0,32,7.8Z"/><path d="M44.06,11.08a1.06,1.06,0,0,0,.45.11,1,1,0,0,0,.9-.55,27.84,27.84,0,0,1,1.47-2.45,1,1,0,0,0-.31-1.38,1,1,0,0,0-1.38.3,30.23,30.23,0,0,0-1.57,2.63A1,1,0,0,0,44.06,11.08Z"/><path d="M53.82,20.32a1,1,0,0,0,.55-.17s.52-.34,2.29-1.31a1,1,0,1,0-1-1.75c-1.84,1-2.38,1.36-2.44,1.39a1,1,0,0,0,.56,1.84Z"/><path d="M60.07,31H57.2a1,1,0,0,0,0,2h2.87a1,1,0,0,0,0-2Z"/><path d="M56.72,45.19c-1.83-1.16-2.34-1.5-2.35-1.51a1,1,0,1,0-1.11,1.67s.51.34,2.38,1.53a1.09,1.09,0,0,0,.54.16,1,1,0,0,0,.54-1.85Z"/><path d="M45.35,53.26a1,1,0,1,0-1.67,1.11s.35.52,1.51,2.35a1,1,0,0,0,.85.46.94.94,0,0,0,.53-.16,1,1,0,0,0,.31-1.38C45.69,53.77,45.35,53.26,45.35,53.26Z"/><path d="M32,56.2a1,1,0,0,0-1,1v2.87a1,1,0,0,0,2,0V57.2A1,1,0,0,0,32,56.2Z"/><path d="M18.48,53.26c0,.06-.39.6-1.39,2.44a1,1,0,1,0,1.75,1c1-1.77,1.31-2.29,1.31-2.29a1,1,0,0,0-1.67-1.11Z"/><path d="M9.74,43.62a30.23,30.23,0,0,0-2.63,1.57A1,1,0,0,0,7.65,47a1.09,1.09,0,0,0,.54-.16c1.76-1.13,2.44-1.47,2.44-1.47a1,1,0,0,0-.89-1.79Z"/><path d="M7.8,32a1,1,0,0,0-1-1H3.93a1,1,0,1,0,0,2H6.8A1,1,0,0,0,7.8,32Z"/><path d="M7.17,18.84c1.88,1,2.57,1.37,2.57,1.37a1,1,0,0,0,.89-1.79s-.68-.34-2.5-1.33a1,1,0,1,0-1,1.75Z"/><path d="M18.42,10.63a1,1,0,0,0,.9.56,1,1,0,0,0,.89-1.45s-.34-.69-1.37-2.57a1,1,0,1,0-1.75,1C18.08,10,18.42,10.62,18.42,10.63Z"/></svg>`;
        }
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M61.4326,33.3882a.9987.9987,0,0,0-1.16.1909,19.497,19.497,0,0,1-13.9512,5.8491h-.0234A19.5995,19.5995,0,0,1,35.0049,3.81a1,1,0,0,0-.4824-1.813,1.2507,1.2507,0,0,0-.4141-.0142A28.1186,28.1186,0,0,0,10.9712,46.0935a10.1276,10.1276,0,0,0-3.4038,6.0872c-.06.3877-.0986.749-.1172,1.0966a8.2092,8.2092,0,0,0-5.4346,7.7413,1,1,0,0,0,1,.999h.001l29-.0327a1,1,0,0,0,.999-1.0015,8.207,8.207,0,0,0-.4869-2.73c.54.0311,1.0771.0488,1.608.0488h.0352a28.3267,28.3267,0,0,0,27.8008-23.87A.999.999,0,0,0,61.4326,33.3882ZM4.0947,60.0166a6.2108,6.2108,0,0,1,4.6172-5.0352,1,1,0,0,0,.7549-.97.7283.7283,0,0,0-.03-.25,8.4488,8.4488,0,0,1,.1065-1.2729,8.0975,8.0975,0,0,1,3.36-5.3633,7.965,7.965,0,0,1,4.5947-1.4541h.01a8.0049,8.0049,0,0,1,7.13,4.3359,7.5061,7.5061,0,0,1,.8291,2.4546,9.4282,9.4282,0,0,1,.1143,1.2036,1.6892,1.6892,0,0,0-.0342.3252,1,1,0,0,0,.7558.97A6.1894,6.1894,0,0,1,30.04,57.6479a6.0983,6.0983,0,0,1,.8946,2.3379ZM34.17,56.3022h-.0332a26.4958,26.4958,0,0,1-2.6875-.1391c-.099-.137-.2183-.2548-.3251-.3847-.1136-.1381-.2233-.2784-.3452-.4083-.1808-.1925-.3764-.3669-.5744-.54-.1261-.1106-.2457-.2276-.3784-.33a8.1443,8.1443,0,0,0-.7175-.48c-.1216-.0749-.235-.1609-.3606-.2295a8.264,8.264,0,0,0-1.1855-.5354c-.02-.3423-.06-.7061-.12-1.103a9.4535,9.4535,0,0,0-1.044-3.0914,9.9837,9.9837,0,0,0-8.8906-5.3891h-.0117a10.1059,10.1059,0,0,0-1.165.0754c-.0672.0079-.1345.0141-.2014.0233a9.9663,9.9663,0,0,0-1.0927.2133c-.0664.0168-.1316.036-.1975.0542a9.8777,9.8777,0,0,0-1.09.3632l-.0224.01a9.9931,9.9931,0,0,0-1.0367.5012c-.0319.0176-.0663.0295-.0981.0475A26.1549,26.1549,0,0,1,31.4775,4.1162a21.6,21.6,0,0,0,14.82,37.312h.0253a21.45,21.45,0,0,0,13.06-4.4057A26.3516,26.3516,0,0,1,34.17,56.3022Z"/></svg>`;

      case 1003:
        if (isDay === 1) {
          return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M39,12.58a1,1,0,0,0,1-1V9.44a1,1,0,1,0-2,0v2.14A1,1,0,0,0,39,12.58Z"/><path d="M47.92,15a.91.91,0,0,0,.45.11,1,1,0,0,0,.89-.55s.26-.5,1.09-1.81a1,1,0,1,0-1.69-1.07,21.44,21.44,0,0,0-1.18,2A1,1,0,0,0,47.92,15Z"/><path d="M55.33,21.94a1,1,0,0,0,.54-.17s.4-.25,1.7-1a1,1,0,1,0-1-1.76c-1.39.76-1.8,1-1.84,1.06a1,1,0,0,0,.56,1.83Z"/><path d="M60,29.42H57.85a1,1,0,0,0,0,2H60a1,1,0,0,0,0-2Z"/><path d="M57.63,40.07l-1.75-1.13a1,1,0,1,0-1.11,1.67l1.79,1.15a1,1,0,0,0,1.38-.31A1,1,0,0,0,57.63,40.07Z"/><path d="M20.33,20.81c1.42.77,1.93,1,1.93,1a1.06,1.06,0,0,0,.45.11,1,1,0,0,0,.89-.55A1,1,0,0,0,23.16,20s-.52-.25-1.87-1a1,1,0,0,0-1.36.4A1,1,0,0,0,20.33,20.81Z"/><path d="M28.64,14.56a1,1,0,0,0,.9.55A1,1,0,0,0,30,15a1,1,0,0,0,.45-1.34s-.26-.52-1-1.93a1,1,0,1,0-1.75,1C28.38,14,28.63,14.55,28.64,14.56Z"/><path d="M50.36,42.88a10.65,10.65,0,0,0-.74-2.19,14.29,14.29,0,0,0,3.63-6.46A14.58,14.58,0,0,0,51.8,23a14.81,14.81,0,0,0-26.9,2.64A14.83,14.83,0,0,0,10.41,38.7a8.46,8.46,0,0,0,1.05,16.86H49.68a6.41,6.41,0,0,0,6.14-6.43A6.31,6.31,0,0,0,50.36,42.88ZM42.29,18a12.9,12.9,0,0,1,7.77,6,12.94,12.94,0,0,1-1.48,14.89,10.67,10.67,0,0,0-6-4.1l-.1,0c-.33-.08-.66-.14-1-.19l-.27,0A8.62,8.62,0,0,0,40,34.48c-.39,0-.75,0-1.13,0A14.63,14.63,0,0,0,27,25.72,12.74,12.74,0,0,1,42.29,18Zm7.34,35.58H11.46a6.46,6.46,0,0,1-.13-12.91h.95l.05-.93A13,13,0,0,1,25.24,27.63a12.1,12.1,0,0,1,1.21.06l.27,0c.35,0,.69.09,1,.16l.13,0A12.93,12.93,0,0,1,38.14,40.53a10.29,10.29,0,0,1-.56,3.8,1,1,0,0,0,.56,1.3,1,1,0,0,0,.37.07,1,1,0,0,0,.93-.62,12.39,12.39,0,0,0,.7-4.55,15.06,15.06,0,0,0-.57-4.05H40a7.17,7.17,0,0,1,1,.07l.2,0A8.57,8.57,0,0,1,47.49,41l.47.86A9,9,0,0,1,48.52,44l.11.87h.88a4.37,4.37,0,0,1,4.31,4.31A4.41,4.41,0,0,1,49.63,53.56Z"/></svg>`;
        }
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M60.79,31.69a1,1,0,0,0-1.1-.34,9.53,9.53,0,0,1-6.23-18,1,1,0,0,0,.64-1,1,1,0,0,0-.7-.92,13.69,13.69,0,0,0-8.74.14h0a14,14,0,0,0-9.44,12.18,15.55,15.55,0,0,0-5.78-2.25c-.25-.05-.49-.09-.74-.12l-.56-.06c-.47,0-.93-.07-1.41-.07a15.88,15.88,0,0,0-15.36,11.8.24.24,0,0,1,0,.08c-.1.4-.19.8-.26,1.22,0,.19-.06.38-.09.58s-.06.29-.07.43A8.92,8.92,0,0,0,12,53.18H52.83a6.63,6.63,0,0,0,6.55-6.68,6.78,6.78,0,0,0-5.83-6.76,11.33,11.33,0,0,0-.38-1.33l.67-.16a13.78,13.78,0,0,0,7-5.41A1,1,0,0,0,60.79,31.69ZM57.38,46.5a4.62,4.62,0,0,1-4.55,4.68H12a6.92,6.92,0,0,1-.13-13.83h.94l.05-.94c0-.3.06-.59.09-.89s0-.38.07-.57c0,0,0,0,0-.06a14,14,0,0,1,13.71-11.6c.42,0,.83,0,1.24.06l.53.06.61.1.73.14.13,0a13.82,13.82,0,0,1,5.52,2.79s.05.08.09.1a13.63,13.63,0,0,1,1.25,1.16l0,.05a12.17,12.17,0,0,1,1,1.23l.18.24a14.1,14.1,0,0,1,.87,1.39.54.54,0,0,1,0,.11,14.27,14.27,0,0,1,.66,1.43,14,14,0,0,1,1,5.11A11.81,11.81,0,0,1,40,41.42a1,1,0,0,0,.6,1.29,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66,13.6,13.6,0,0,0,.73-4.81A16,16,0,0,0,42,32.9h.57a8.11,8.11,0,0,1,1.21.09l.17,0a9.29,9.29,0,0,1,6.92,5.14,1,1,0,0,0,.17.25,8.93,8.93,0,0,1,.68,2.43l.12.86h.88A4.76,4.76,0,0,1,57.38,46.5ZM53.26,36.33l-.94.23A11.28,11.28,0,0,0,44.14,31l-.22,0a12.44,12.44,0,0,0-1.37-.09c-.44,0-.84,0-1.26,0-.1-.23-.22-.46-.33-.68a14.63,14.63,0,0,0-.75-1.35l0-.07a16.07,16.07,0,0,0-3-3.56,12.06,12.06,0,0,1,8.15-11.78,11.94,11.94,0,0,1,4.86-.64A11.52,11.52,0,0,0,45.93,26a11.68,11.68,0,0,0,11.54,7.78A11.93,11.93,0,0,1,53.26,36.33Z"/></svg>`;

      case 1006:
      case 1009:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,37.35a12.28,12.28,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.25-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.22-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.58,8.58,0,0,1,3,.81,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,18.09a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,22l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,37.32l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/></svg>`;

      case 1030:
      case 1135:
      case 1147:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,29.39a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.52,0-1.05,0-1.56.07a16.24,16.24,0,0,0-10.35,5l-.12.12c-.23.25-.45.51-.67.78l-.37.45c-.13.17-.25.34-.37.52s-.38.55-.56.83l-.13.23a15.9,15.9,0,0,0-2.05,5.6s0,.07,0,.1c0,.23-.08.46-.11.69a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.91a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.89,8.89,0,0,1,3,.82,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.42,16.42,0,0,0,33,10.13a6.73,6.73,0,0,1,4.82-2,7,7,0,0,1,6.83,5.9l.17,1.08,1.06-.26a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,29.36l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/><path d="M55.32,44.49a4.08,4.08,0,0,0-2.92,1.25,2.1,2.1,0,0,1-1.59.75,2.13,2.13,0,0,1-1.59-.75,4,4,0,0,0-5.83,0,2,2,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-2.91-1.25,4.1,4.1,0,0,0-2.92,1.25,2,2,0,0,1-3.16,0,4.1,4.1,0,0,0-2.92-1.25,1,1,0,0,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,0,0,0-2Z"/><path d="M55.32,49.16a4.12,4.12,0,0,0-2.92,1.25,2.1,2.1,0,0,1-1.59.75,2.13,2.13,0,0,1-1.59-.75,4,4,0,0,0-5.83,0,2,2,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.83,0,2.1,2.1,0,0,1-1.58.75,2.12,2.12,0,0,1-1.58-.74,4.06,4.06,0,0,0-2.92-1.26,1,1,0,1,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,0,0,0-2Z"/><path d="M55.32,53.83a4.08,4.08,0,0,0-2.92,1.26,2.09,2.09,0,0,1-1.59.74,2.12,2.12,0,0,1-1.59-.74,4,4,0,0,0-5.83,0,2.07,2.07,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.08,2.08,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.08,2.08,0,0,1-3.18,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.16,0,4.06,4.06,0,0,0-2.92-1.26,1,1,0,1,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,1,0,0-2Z"/></svg>`;

      case 1063:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1198:
      case 1201:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,33.09a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.25-.47.52-.69.79l-.35.43c-.14.18-.26.36-.39.54s-.37.54-.54.81l-.15.25a15.84,15.84,0,0,0-2,5.59s0,.07,0,.1c0,.23-.08.46-.11.69a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.91a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.83,8.83,0,0,1,3,.82,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.43,16.43,0,0,0,33,13.83a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,33.06l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/><path d="M26.47,48.16a1,1,0,0,0-1.27.61l-1.42,4a1,1,0,0,0,.61,1.28,1.26,1.26,0,0,0,.33.05,1,1,0,0,0,.94-.66l1.42-4A1,1,0,0,0,26.47,48.16Z"/><path d="M39.64,48.17a1,1,0,0,0-1.29.58l-1.54,4a1,1,0,0,0,.57,1.29,1.13,1.13,0,0,0,.36.06,1,1,0,0,0,.94-.64l1.53-4A1,1,0,0,0,39.64,48.17Z"/></svg>`;

      case 1066:
      case 1069:
      case 1204:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1255:
      case 1279:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.34,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M24.9,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,24.9,49.81Z"/><path d="M39.1,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,39.1,49.81Z"/></svg>`;

      case 1072:
      case 1150:
      case 1153:
      case 1240:
      case 1249:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.25a15.79,15.79,0,0,0-2,5.58s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.93,6.93,0,0,0,3.94-12.51Zm-4,10.51h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M23.77,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.58,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.93-.65l1.54-4A1,1,0,0,0,23.77,46.4Z"/><path d="M42.36,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.58,1.29.91.91,0,0,0,.35.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.36,46.4Z"/><path d="M33.7,46.39a1,1,0,0,0-1.28.6L29.7,54.57a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l2.72-7.58A1,1,0,0,0,33.7,46.39Z"/></svg>`;

      case 1168:
      case 1192:
      case 1195:
      case 1243:
      case 1246:
      case 1252:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.27,16.27,0,0,0-10.36,5l-.11.1c-.23.26-.46.52-.67.79a4.94,4.94,0,0,0-.36.44A6.42,6.42,0,0,0,14,18c-.19.27-.38.54-.55.82,0,.08-.1.16-.14.24a15.71,15.71,0,0,0-2.05,5.6l0,.08c0,.24-.08.47-.11.7a9.23,9.23,0,0,0,1,18.39H54.24a6.93,6.93,0,0,0,3.94-12.51Zm-4,10.51h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.86,8.86,0,0,1,3,.81,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.09,1.06-.27a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M25.79,46.4A1,1,0,0,0,24.5,47L23,51a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.93-.65l1.54-4A1,1,0,0,0,25.79,46.4Z"/><path d="M42.6,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.6,46.4Z"/><path d="M34.54,46.4a1,1,0,0,0-1.29.58l-2.84,7.58A1,1,0,0,0,31,55.85a1,1,0,0,0,1.29-.59l2.84-7.58A1,1,0,0,0,34.54,46.4Z"/><path d="M17.36,46.39a1,1,0,0,0-1.28.6l-2.72,7.58a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66L18,47.67A1,1,0,0,0,17.36,46.39Z"/><path d="M50.05,46.4a1,1,0,0,0-1.29.58l-2.84,7.58a1,1,0,0,0,.59,1.29,1,1,0,0,0,.35.06,1,1,0,0,0,.93-.65l2.85-7.58A1,1,0,0,0,50.05,46.4Z"/></svg>`;

      case 1171:
      case 1273:
      case 1276:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.27,16.27,0,0,0-10.36,5l-.11.1c-.23.26-.46.52-.67.79a4.94,4.94,0,0,0-.36.44A6.42,6.42,0,0,0,14,18c-.19.27-.38.54-.55.82,0,.08-.1.16-.14.24a15.71,15.71,0,0,0-2.05,5.6l0,.08c0,.24-.08.47-.11.7a9.23,9.23,0,0,0,1,18.39H22.23a1,1,0,1,0,0-2H12.17a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.86,8.86,0,0,1,3,.81,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.09,1.06-.27a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24H31.94a1,1,0,1,0,0,2h22.3a6.93,6.93,0,0,0,3.94-12.51Z"/><path d="M42.6,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.6,46.4Z"/><path d="M34.54,46.4a1,1,0,0,0-1.29.58l-2.84,7.58A1,1,0,0,0,31,55.85a1,1,0,0,0,1.29-.59l2.84-7.58A1,1,0,0,0,34.54,46.4Z"/><path d="M17.36,46.39a1,1,0,0,0-1.28.6l-2.72,7.58a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66L18,47.67A1,1,0,0,0,17.36,46.39Z"/><path d="M50.05,46.4a1,1,0,0,0-1.29.58l-2.84,7.58a1,1,0,0,0,.59,1.29,1,1,0,0,0,.35.06,1,1,0,0,0,.93-.65l2.85-7.58A1,1,0,0,0,50.05,46.4Z"/><path d="M30.83,36.54a1.07,1.07,0,0,0-1-1.08h-7l4.64-10.32a.93.93,0,0,0-.59-1.27,1,1,0,0,0-1.38.49l-5.3,11.79a1.08,1.08,0,0,0,.59,1.38,1,1,0,0,0,.39.07v0h7.1L23.17,51a1,1,0,0,0,.59,1.27,1.07,1.07,0,0,0,1.37-.59l5.56-14.62A1.11,1.11,0,0,0,30.83,36.54Z"/></svg>`;

      case 1087:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.13,32.45a12.22,12.22,0,0,0,.92-4.57,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.58-6.63,8.65,8.65,0,0,0-6.91,3.3,16.53,16.53,0,0,0-3.49-.34c-.52,0-1.05,0-1.56.07a16.31,16.31,0,0,0-10.33,5l-.12.12c-.23.25-.45.51-.66.77l-.38.46-.36.51c-.2.28-.38.55-.56.84a2.53,2.53,0,0,0-.13.22,15.9,15.9,0,0,0-2.06,5.61v.07c0,.24-.08.46-.11.7a9.21,9.21,0,0,0,1,18.36h10a1,1,0,0,0,0-2h-10a7.22,7.22,0,0,1-.09-14.43l.91,0,.06-.9a14.38,14.38,0,0,1,28.72,1,14.65,14.65,0,0,1-.66,4.31,1,1,0,0,0,1,1.3,1,1,0,0,0,1-.71,16.61,16.61,0,0,0,.75-4.9,17.27,17.27,0,0,0-.19-2.4,8.84,8.84,0,0,1,3,.82,8,8,0,0,1,3.67,10.6,1,1,0,0,0,.47,1.33,1,1,0,0,0,.43.1,1,1,0,0,0,.9-.57A10,10,0,0,0,47.48,25.2a10.39,10.39,0,0,0-4.29-1A16.41,16.41,0,0,0,33,13.23a6.72,6.72,0,0,1,4.81-2,7,7,0,0,1,6.81,5.89l.17,1.08L45.89,18a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.62,10.62,0,0,1,56,32.42l-.39.86.83.44A4.92,4.92,0,0,1,54.15,43H31.94a1,1,0,1,0,0,2H54.19a6.93,6.93,0,0,0,3.94-12.5Z"/><path d="M31,36.54a1.07,1.07,0,0,0-1-1.08H23l4.64-10.32a.93.93,0,0,0-.59-1.27,1,1,0,0,0-1.38.49l-5.3,11.79A1.08,1.08,0,0,0,21,37.53a1,1,0,0,0,.39.07v0h7.1L23.34,51a1,1,0,0,0,.58,1.27,1.08,1.08,0,0,0,1.38-.59l5.56-14.62A1.11,1.11,0,0,0,31,36.54Z"/></svg>`;

      case 1114:
      case 1219:
        return `<?xml version="1.0" ?><svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.34,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M24.9,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,24.9,49.81Z"/><path d="M39.1,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,39.1,49.81Z"/><path d="M32,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,32,49.81Z"/></svg>`;

      case 1117:
        return `<?xml version="1.0" ?><svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.33,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.16,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M15.72,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,15.72,49.81Z"/><path d="M23.86,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,23.86,49.81Z"/><path d="M32,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,32,49.81Z"/><path d="M40.14,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,40.14,49.81Z"/><path d="M48.28,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,48.28,49.81Z"/></svg>`;

      case 1222:
      case 1225:
      case 1237:
      case 1258:
      case 1261:
      case 1264:
      case 1282:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.31,16.37,16.37,0,0,0-3.49-.35c-.53,0-1.05,0-1.56.08a16.21,16.21,0,0,0-10.36,5l-.11.11c-.23.25-.46.51-.67.78s-.25.29-.36.44-.26.35-.38.53-.38.54-.55.82c0,.08-.1.16-.14.24a15.83,15.83,0,0,0-2.05,5.61l0,.08c0,.23-.08.46-.11.7a9.23,9.23,0,0,0,1,18.39h.12a1,1,0,0,0,0-2h-.12A7.23,7.23,0,0,1,12.08,30l.15,0,.18,0,.18-.11.13-.08c.06-.06.1-.13.15-.19l.07-.11A.69.69,0,0,0,13,29.2a.32.32,0,0,0,0-.09,14.41,14.41,0,0,1,28.78,1,14.77,14.77,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29,0,1,1,0,0,0,1-.7,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.83,8.83,0,0,1,3,.82,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.55,10.55,0,0,0-4.3-1A16.42,16.42,0,0,0,33,14.72a6.7,6.7,0,0,1,4.82-2,7,7,0,0,1,6.83,5.91,1,1,0,0,0,1.23.81,4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34a1,1,0,0,0,.44,1.3A4.93,4.93,0,0,1,54.2,44.5H51.83a1,1,0,0,0,0,2h2.41A6.94,6.94,0,0,0,58.18,34Z"/><path d="M29.93,44.5H25.59l3-3a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-3,3V38.75a1,1,0,0,0-2,0v4.33l-3-3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l3,3H16.43a1,1,0,0,0,0,2h4.34l-3,3a1,1,0,0,0,.7,1.7,1,1,0,0,0,.71-.29l3-3v4.34a1,1,0,0,0,2,0V47.91l3,3a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41l-3-3h4.34a1,1,0,1,0,0-2Z"/><path d="M47.57,44.5H43.23l3-3a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-3,3V38.75a1,1,0,0,0-2,0v4.33l-3-3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l3,3H34.07a1,1,0,1,0,0,2h4.34l-3,3a1,1,0,0,0,.7,1.7,1,1,0,0,0,.71-.29l3-3v4.34a1,1,0,0,0,2,0V47.91l3,3a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41l-3-3h4.34a1,1,0,0,0,0-2Z"/></svg>`;

      default:
        return null;
    }
  }

  // Call the API to extract the data in json
  async function loadJson(url) {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });

      if (!response.ok) {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.originalError = await response.json();
        throw error;
      }
      const json = await response.json();
      return json;
    } catch (error) {
      const newError = new Error(
        `Error fetching or parsing JSON: ${error.message}`,
      );
      if (error.originalError) {
        newError.originalError = error.originalError;
      }
      throw newError;
    }
  }

  // Helper function processing json and parsing data
  function parseLocationData(url) {
    loadJson(url)
      .then((json) => {
        console.log(json);

        const todayWeather = {
          current: {
            city: json.location.name,
            country: json.location.country,
            conditionText: json.current.condition.text,
            conditionIcon: getIcon(
              json.current.condition.code,
              json.current.is_day,
            ),
            conditionCode: json.current.condition.code,
            feelsLikeC: json.current.feelslike_c,
            feelsLikeF: json.current.feelslike_f,
            tempC: json.current.temp_c,
            tempF: json.current.temp_f,
            localTime: json.location.localtime,
            humidity: json.current.humidity,
            visibility: json.current.vis_km,
            cloudiness: json.current.cloud,
            sunrise: json.forecast.forecastday[0].astro.sunrise,
            sunset: json.forecast.forecastday[0].astro.sunset,
            moonIllumination:
              json.forecast.forecastday[0].astro.moon_illumination,
            isDay: json.current.is_day,
          },
          forecast: [
            {
              day: "tomorrow",
              date: json.forecast.forecastday[1].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[1].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[1].day.condition.text,
              conditionCode: json.forecast.forecastday[1].day.condition.code,
              avgtemp_c: json.forecast.forecastday[1].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[1].day.avgtemp_f,
            },
            {
              day: "day after tomorrow",
              date: json.forecast.forecastday[2].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[2].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[2].day.condition.text,
              conditionCode: json.forecast.forecastday[2].day.condition.code,
              avgtemp_c: json.forecast.forecastday[2].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[2].day.avgtemp_f,
            },
            {
              day: "fourth day",
              date: json.forecast.forecastday[3].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[3].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[3].day.condition.text,
              conditionCode: json.forecast.forecastday[3].day.condition.code,
              avgtemp_c: json.forecast.forecastday[3].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[3].day.avgtemp_f,
            },
          ],
        };

        console.log(todayWeather);

        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].deleteDynamicDomElements();
        _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createDynamicDomElements(
          _domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].defineDynamicDomTree(todayWeather),
          document.querySelector(".wrapper"),
        );
      })
      .catch((error) => {
        console.log(error.message);
        if (error.originalError) {
          console.log("Original error object: ", error.originalError);
        }
      });
  }

  // Show data based on user location during page load
  function showDefaultLocationData() {
    const cityName = "London";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${cityName}&days=4`;
    parseLocationData(url);
  }

  // Show data based on user search
  function showSearchedLocationData() {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cityName = document.querySelector("#search");
      const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${cityName.value}&days=4`;
      parseLocationData(url);
    });
  }

  // Show data based on determiend user's location
  async function showUserLocationData() {
    let ipAddress;
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      showDefaultLocationData();
    }

    if (ipAddress) {
      try {
        const locationResponse = await fetch(
          `https://ipapi.co/${ipAddress}/json/`,
        );
        const locationData = await locationResponse.json();
        const { latitude, longitude } = locationData;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${latitude},${longitude}&days=4`;
        parseLocationData(url);
        return;
      } catch (error) {
        showDefaultLocationData();
      }
    }
    showDefaultLocationData();
  }

  return {
    showSearchedLocationData,
    showUserLocationData,
    showDefaultLocationData,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherDataModule);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");
/* harmony import */ var _weatherDataModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherDataModule */ "./src/weatherDataModule.js");
/* eslint-disable prefer-destructuring */




_domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].createStaticDomElements(
  _domHandler__WEBPACK_IMPORTED_MODULE_1__["default"].defineStaticDomTree(),
  document.querySelector("body"),
);

_weatherDataModule__WEBPACK_IMPORTED_MODULE_2__["default"].showDefaultLocationData();
// WeatherDataModule.showUserLocationData();
_weatherDataModule__WEBPACK_IMPORTED_MODULE_2__["default"].showSearchedLocationData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WVk7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBLFFBQVEsbURBQVM7QUFDakIsUUFBUSxtREFBUztBQUNqQixVQUFVLG1EQUFTO0FBQ25CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcsU0FBUztBQUM5RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxlQUFlO0FBQ3RIO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEMseUdBQXlHLFNBQVMsR0FBRyxVQUFVO0FBQy9IO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQy9QakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDc0I7QUFDZTtBQUNlOztBQUVwRCxtREFBUztBQUNULEVBQUUsbURBQVM7QUFDWDtBQUNBOztBQUVBLDBEQUFpQjtBQUNqQjtBQUNBLDBEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdmFjbGltYS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL3NyYy9kb21IYW5kbGVyLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL3NyYy93ZWF0aGVyRGF0YU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmFjbGltYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MCwxMDAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwOzEsMTAwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbjpyb290IHtcbiAgLS1zZWNvbmRhcnktZm9udC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODlhNjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzAwYWJjZixcbiAgICAjMDA5YWJhLFxuICAgICMwMDg5YTYsXG4gICAgIzAwNzg5MSxcbiAgICAjMDA2ODdlXG4gICk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIFBhZ2UgZ3JpZCBsYXlvdXQgc3R5bGVzICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgwcHgsIDkwMHB4KSAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnIgNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3AtbmF2IHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uZm9vdGVyIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMyAvIDQ7XG59XG5cbi8qIFNlYXJjaCBmaWVsZCAqL1xuXG4uc2VhcmNoLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1mb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk0NTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAzOTQ1O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzO1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxleDogMCAxIDI1MHB4O1xufVxuXG4uc2VhcmNoLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbn1cblxuLnNlYXJjaC1mb3JtIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB+IGJ1dHRvbiB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDYwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDM5NDU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcbn1cblxuLnN2Zy1pbmxpbmUtc3VibWl0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi8qIE1haW4gY29udGFpbmVyIHN0eWxlcyAqL1xuXG4ubG9jYXRpb24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uID4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jYXRpb24gPiAuY2l0eS1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubG9jYXRpb24gPiAuZGF0ZS10aW1lIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbn1cblxuLmN1cnJlbnQge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xufVxuXG4uY3VycmVudCA+IC5jb25kaXRpb24taWNvbi1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gNTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY3VycmVudCA+IC5jb25kaXRpb24tdGV4dCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDQgLyA1O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VycmVudCA+IC5mZWVscy1saWtlIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBncmlkLXJvdzogNCAvIDU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XG59XG5cbi5jdXJyZW50ID4gLnRlbXBlcmF0dXJlIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICBncmlkLXJvdzogMiAvIDQ7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmN1cnJlbnQgPiAuaHVtaWRpdHktY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDUgLyA3O1xuICBncmlkLXJvdzogMSAvIDM7XG59XG5cbi5jdXJyZW50ID4gLmNsb3VkaW5lc3MtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDcgLyA4O1xuICBncmlkLXJvdzogMSAvIDM7XG59XG5cbi5jdXJyZW50ID4gLnZpc2liaWxpdHktY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcbiAgZ3JpZC1yb3c6IDEgLyAzO1xufVxuXG4uY3VycmVudCA+IC5zdW5yaXNlLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiA1IC8gNztcbiAgZ3JpZC1yb3c6IDMgLyA1O1xufVxuXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDcgLyA5O1xuICBncmlkLXJvdzogMyAvIDU7XG59XG5cbi5jdXJyZW50ID4gLm1vb24taWxsdW1pbmF0aW9uLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiA5IC8gMTE7XG4gIGdyaWQtcm93OiAzIC8gNTtcbn1cblxuLmN1cnJlbnQgPiAuaHVtaWRpdHktY29udGFpbmVyLFxuLmN1cnJlbnQgPiAuY2xvdWRpbmVzcy1jb250YWluZXIsXG4uY3VycmVudCA+IC52aXNpYmlsaXR5LWNvbnRhaW5lcixcbi5jdXJyZW50ID4gLnN1bnJpc2UtY29udGFpbmVyLFxuLmN1cnJlbnQgPiAuc3Vuc2V0LWNvbnRhaW5lcixcbi5jdXJyZW50ID4gLm1vb24taWxsdW1pbmF0aW9uLWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmN1cnJlbnQgPiAuaHVtaWRpdHktY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkLFxuLmN1cnJlbnQgPiAuY2xvdWRpbmVzcy1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQsXG4uY3VycmVudCA+IC52aXNpYmlsaXR5LWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcbi5jdXJyZW50ID4gLnN1bnJpc2UtY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkLFxuLmN1cnJlbnQgPiAuc3Vuc2V0LWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcbi5jdXJyZW50ID4gLm1vb24taWxsdW1pbmF0aW9uLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcbn1cblxuLmN1cnJlbnQgPiAuaHVtaWRpdHktY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQsXG4uY3VycmVudCA+IC5jbG91ZGluZXNzLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkLFxuLmN1cnJlbnQgPiAudmlzaWJpbGl0eS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCxcbi5jdXJyZW50ID4gLnN1bnJpc2UtY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQsXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQsXG4uY3VycmVudCA+IC5tb29uLWlsbHVtaW5hdGlvbi1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLyogY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTsgKi9cbn1cblxuc3ZnIHtcbiAgZmlsbDogd2hpdGVzbW9rZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsbUJBQW1COztBQUVuQjtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzs7Ozs7O0dBT0M7QUFDSDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaURBQWlEO0VBQ2pELGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7RUFNRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7OztFQU1FLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7OztFQU1FLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXG5cXG46cm9vdCB7XFxuICAtLXNlY29uZGFyeS1mb250LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODlhNjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgIzAwYWJjZixcXG4gICAgIzAwOWFiYSxcXG4gICAgIzAwODlhNixcXG4gICAgIzAwNzg5MSxcXG4gICAgIzAwNjg3ZVxcbiAgKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBQYWdlIGdyaWQgbGF5b3V0IHN0eWxlcyAqL1xcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgwcHgsIDkwMHB4KSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyIDcwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3AtbmF2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi8qIFNlYXJjaCBmaWVsZCAqL1xcblxcbi5zZWFyY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTQ1O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDM5NDU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxuICBmbGV4OiAwIDEgMjUwcHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB+IGJ1dHRvbiB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM5NDU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMzk0NTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3M7XFxufVxcblxcbi5zdmctaW5saW5lLXN1Ym1pdCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgc3R5bGVzICovXFxuXFxuLmxvY2F0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiA+IC5jaXR5LWNvdW50cnkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24gPiAuZGF0ZS10aW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxufVxcblxcbi5jdXJyZW50IHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbi5jdXJyZW50ID4gLmNvbmRpdGlvbi1pY29uLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY3VycmVudCA+IC5jb25kaXRpb24tdGV4dCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7ICovXFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jdXJyZW50ID4gLmZlZWxzLWxpa2Uge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY3VycmVudCA+IC50ZW1wZXJhdHVyZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMiAvIDQ7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5jdXJyZW50ID4gLmh1bWlkaXR5LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbi5jdXJyZW50ID4gLmNsb3VkaW5lc3MtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiA3IC8gODtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmN1cnJlbnQgPiAudmlzaWJpbGl0eS1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmN1cnJlbnQgPiAuc3VucmlzZS1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgZ3JpZC1yb3c6IDMgLyA1O1xcbn1cXG5cXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiA3IC8gOTtcXG4gIGdyaWQtcm93OiAzIC8gNTtcXG59XFxuXFxuLmN1cnJlbnQgPiAubW9vbi1pbGx1bWluYXRpb24tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiA5IC8gMTE7XFxuICBncmlkLXJvdzogMyAvIDU7XFxufVxcblxcbi5jdXJyZW50ID4gLmh1bWlkaXR5LWNvbnRhaW5lcixcXG4uY3VycmVudCA+IC5jbG91ZGluZXNzLWNvbnRhaW5lcixcXG4uY3VycmVudCA+IC52aXNpYmlsaXR5LWNvbnRhaW5lcixcXG4uY3VycmVudCA+IC5zdW5yaXNlLWNvbnRhaW5lcixcXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyLFxcbi5jdXJyZW50ID4gLm1vb24taWxsdW1pbmF0aW9uLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50ID4gLmh1bWlkaXR5LWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcXG4uY3VycmVudCA+IC5jbG91ZGluZXNzLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcXG4uY3VycmVudCA+IC52aXNpYmlsaXR5LWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcXG4uY3VycmVudCA+IC5zdW5yaXNlLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCxcXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkLFxcbi5jdXJyZW50ID4gLm1vb24taWxsdW1pbmF0aW9uLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY3VycmVudCA+IC5odW1pZGl0eS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY3VycmVudCA+IC5jbG91ZGluZXNzLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkLFxcbi5jdXJyZW50ID4gLnZpc2liaWxpdHktY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQsXFxuLmN1cnJlbnQgPiAuc3VucmlzZS1jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCxcXG4uY3VycmVudCA+IC5zdW5zZXQtY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQsXFxuLmN1cnJlbnQgPiAubW9vbi1pbGx1bWluYXRpb24tY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgLyogY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTsgKi9cXG59XFxuXFxuc3ZnIHtcXG4gIGZpbGw6IHdoaXRlc21va2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZURvbSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGRlZmluZVN0YXRpY0RvbVRyZWUoKSB7XG4gICAgY29uc3QgRE9NVHJlZSA9IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGVsZW1lbnRDbGFzczogXCJ3cmFwcGVyXCIsXG4gICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0b3AtbmF2XCIsXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9ybS13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzZWFyY2gtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IFwiU2VhcmNoIGxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwic2VhcmNoLXN1Ym1pdC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJbm5lckhUTUw6IGA8c3ZnIGNsYXNzPVwic3ZnLWlubGluZS1zdWJtaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic2VhcmNoXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBkYXRhLWZhLWkyc3ZnPVwiXCI+PHBhdGggZmlsbD1cIndoaXRlXCIgZD1cIk01MDguNSA0NjguOUwzODcuMSAzNDcuNWMtMi4zLTIuMy01LjMtMy41LTguNS0zLjVoLTEzLjJjMzEuNS0zNi41IDUwLjYtODQgNTAuNi0xMzZDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM1MiAwIDk5LjUtMTkuMSAxMzYtNTAuNnYxMy4yYzAgMy4yIDEuMyA2LjIgMy41IDguNWwxMjEuNCAxMjEuNGM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjIuNi0yMi42YzQuNy00LjcgNC43LTEyLjMgMC0xN3pNMjA4IDM2OGMtODguNCAwLTE2MC03MS42LTE2MC0xNjBTMTE5LjYgNDggMjA4IDQ4czE2MCA3MS42IDE2MCAxNjAtNzEuNiAxNjAtMTYwIDE2MHpcIj48L3BhdGg+PC9zdmc+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb290ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIERPTVRyZWU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVEeW5hbWljRG9tVHJlZShkYXRhKSB7XG4gICAgY29uc3QgW2RhdGUsIHRpbWVdID0gZGF0YS5jdXJyZW50LmxvY2FsVGltZS5zcGxpdChcIiBcIik7XG5cbiAgICBjb25zdCBET01UcmVlID0gW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgZWxlbWVudENsYXNzOiBcIm1haW4tY29udGFpbmVyXCIsXG4gICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJsb2NhdGlvblwiLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNpdHktY291bnRyeVwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50LmNpdHl9LCAke2RhdGEuY3VycmVudC5jb3VudHJ5fWAsXG4gICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXRlLXRpbWVcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGV9IHwgJHt0aW1lfWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidG9kYXlcIixcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJjdXJyZW50XCIsXG4gICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNvbmRpdGlvbi1pY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50SW5uZXJIVE1MOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiY29uZGl0aW9uLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uVGV4dCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmN1cnJlbnQudGVtcEN9wrBDYCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZmVlbHMtbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGBGZWVscyBsaWtlICR7ZGF0YS5jdXJyZW50LmZlZWxzTGlrZUN9wrBDYCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiaHVtaWRpdHktY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJodW1pZGl0eS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgSHVtaWRpdHlgLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiaHVtaWRpdHktdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInZpc2liaWxpdHktY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ2aXNpYmlsaXR5LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGBWaXNpYmlsaXR5YCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInZpc2liaWxpdHktdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50LnZpc2liaWxpdHl9a21gLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNsb3VkaW5lc3MtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJjbG91ZGluZXNzLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGBDbG91ZGluZXNzYCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNsb3VkaW5lc3MtdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50LmNsb3VkaW5lc3N9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwibW9vbi1pbGx1bWluYXRpb24tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJtb29uLWlsbHVtaW5hdGlvbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgTW9vbiBJbGx1bWluYXRpb25gLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwibW9vbi1pbGx1bWluYXRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50Lm1vb25JbGx1bWluYXRpb259JWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwic3VucmlzZS1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnJpc2UtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYFN1bnJpc2VgLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwic3VucmlzZS12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmN1cnJlbnQuc3VucmlzZX1gLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnNldC1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnNldC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgU3Vuc2V0YCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnNldC12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmN1cnJlbnQuc3Vuc2V0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJob3VybHktZm9yZWNhc3RcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYWlseS1mb3JlY2FzdFwiLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImRheS1vbmVcIixcbiAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuZm9yZWNhc3RbMF0uZGF0ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9yZWNhc3QtY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb24taWNvbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJbm5lckhUTUw6IGRhdGEuZm9yZWNhc3RbMF0uY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuZm9yZWNhc3RbMF0uY29uZGl0aW9uVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGEuZm9yZWNhc3RbMF0uYXZndGVtcF9jfcKwQ2AsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZGF5LXR3b1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogZGF0YS5mb3JlY2FzdFsxXS5kYXRlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElubmVySFRNTDogZGF0YS5mb3JlY2FzdFsxXS5jb25kaXRpb25JY29uLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9yZWNhc3QtY29uZGl0aW9uLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogZGF0YS5mb3JlY2FzdFsxXS5jb25kaXRpb25UZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInRlbXBlcmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5mb3JlY2FzdFsxXS5hdmd0ZW1wX2N9wrBDYCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXktdGhyZWVcIixcbiAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuZm9yZWNhc3RbMl0uZGF0ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9yZWNhc3QtY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb24taWNvbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJbm5lckhUTUw6IGRhdGEuZm9yZWNhc3RbMl0uY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuZm9yZWNhc3RbMl0uY29uZGl0aW9uVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGEuZm9yZWNhc3RbMl0uYXZndGVtcF9jfcKwQ2AsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gRE9NVHJlZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnRzSGVscGVyKHRyZWUsIHBhcmVudEVsZW1lbnQpIHtcbiAgICB0cmVlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLmVsZW1lbnRUeXBlKTtcbiAgICAgIGlmIChvYmouZWxlbWVudENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChvYmouZWxlbWVudENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChvYmouZWxlbWVudEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgb2JqLmVsZW1lbnRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dC5hdHRyaWJ1dGVOYW1lLCBhdHQuYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvYmouZWxlbWVudFRleHRDb250ZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmouZWxlbWVudFRleHRDb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKG9iai5lbGVtZW50SW5uZXJIVE1MKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb2JqLmVsZW1lbnRJbm5lckhUTUw7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcblxuICAgICAgaWYgKG9iai5jaGlsZEVsZW1lbnRzKSB7XG4gICAgICAgIGNyZWF0ZURvbUVsZW1lbnRzSGVscGVyKG9iai5jaGlsZEVsZW1lbnRzLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBET00gZWxlbWVudHMgYmFzZWQgb24gdGhlIERPTVRyZWVcbiAgZnVuY3Rpb24gY3JlYXRlU3RhdGljRG9tRWxlbWVudHModHJlZSwgcGFyZW50RWxlbWVudCkge1xuICAgIGNyZWF0ZURvbUVsZW1lbnRzSGVscGVyKHRyZWUsIHBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRHluYW1pY0RvbUVsZW1lbnRzKHRyZWUsIHBhcmVudEVsZW1lbnQpIHtcbiAgICBjcmVhdGVEb21FbGVtZW50c0hlbHBlcih0cmVlLCBwYXJlbnRFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUR5bmFtaWNEb21FbGVtZW50cygpIHtcbiAgICBjb25zdCBleGlzdGluZ1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICAgIGlmIChleGlzdGluZ1dyYXBwZXIpIHtcbiAgICAgIGV4aXN0aW5nV3JhcHBlci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlZmluZVN0YXRpY0RvbVRyZWUsXG4gICAgZGVmaW5lRHluYW1pY0RvbVRyZWUsXG4gICAgY3JlYXRlU3RhdGljRG9tRWxlbWVudHMsXG4gICAgY3JlYXRlRHluYW1pY0RvbUVsZW1lbnRzLFxuICAgIGRlbGV0ZUR5bmFtaWNEb21FbGVtZW50cyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvbTtcbiIsImltcG9ydCBjcmVhdGVEb20gZnJvbSBcIi4vZG9tSGFuZGxlclwiO1xuXG4vLyBUaGUgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciBleHRyYWN0aW5nIGFuZCBkaXNwbGF5aW5nIGxvY2F0aW9uIGRhdGFcbmNvbnN0IFdlYXRoZXJEYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gZ2V0SWNvbihjb2RlLCBpc0RheSkge1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSAxMDAwOlxuICAgICAgICBpZiAoaXNEYXkgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTM3LDEzLjExQTE5LjUyLDE5LjUyLDAsMCwwLDE1LjA2LDQxLjc2YTE5LDE5LDAsMCwwLDExLjc3LDksMTkuNjQsMTkuNjQsMCwwLDAsNS4xOC43LDE5LjQsMTkuNCwwLDAsMCw5Ljc1LTIuNjQsMTkuMDgsMTkuMDgsMCwwLDAsOS0xMS43OEExOS41LDE5LjUsMCwwLDAsMzcsMTMuMTFaTTQ4Ljc5LDM2LjQ4YTE3LjExLDE3LjExLDAsMCwxLTgsMTAuNTcsMTcuNDUsMTcuNDUsMCwwLDEtMTMuNDEsMS43NCwxNy4xMSwxNy4xMSwwLDAsMS0xMC41Ny04QTE3LjU1LDE3LjU1LDAsMCwxLDMxLjksMTQuNDJhMTcuMTcsMTcuMTcsMCwwLDEsNC41Ny42MkExNy41MSwxNy41MSwwLDAsMSw0OC43OSwzNi40OFpcIi8+PHBhdGggZD1cIk0zMiw3LjhhMSwxLDAsMCwwLDEtMVYzLjkzYTEsMSwwLDEsMC0yLDBWNi44QTEsMSwwLDAsMCwzMiw3LjhaXCIvPjxwYXRoIGQ9XCJNNDQuMDYsMTEuMDhhMS4wNiwxLjA2LDAsMCwwLC40NS4xMSwxLDEsMCwwLDAsLjktLjU1LDI3Ljg0LDI3Ljg0LDAsMCwxLDEuNDctMi40NSwxLDEsMCwwLDAtLjMxLTEuMzgsMSwxLDAsMCwwLTEuMzguMywzMC4yMywzMC4yMywwLDAsMC0xLjU3LDIuNjNBMSwxLDAsMCwwLDQ0LjA2LDExLjA4WlwiLz48cGF0aCBkPVwiTTUzLjgyLDIwLjMyYTEsMSwwLDAsMCwuNTUtLjE3cy41Mi0uMzQsMi4yOS0xLjMxYTEsMSwwLDEsMC0xLTEuNzVjLTEuODQsMS0yLjM4LDEuMzYtMi40NCwxLjM5YTEsMSwwLDAsMCwuNTYsMS44NFpcIi8+PHBhdGggZD1cIk02MC4wNywzMUg1Ny4yYTEsMSwwLDAsMCwwLDJoMi44N2ExLDEsMCwwLDAsMC0yWlwiLz48cGF0aCBkPVwiTTU2LjcyLDQ1LjE5Yy0xLjgzLTEuMTYtMi4zNC0xLjUtMi4zNS0xLjUxYTEsMSwwLDEsMC0xLjExLDEuNjdzLjUxLjM0LDIuMzgsMS41M2ExLjA5LDEuMDksMCwwLDAsLjU0LjE2LDEsMSwwLDAsMCwuNTQtMS44NVpcIi8+PHBhdGggZD1cIk00NS4zNSw1My4yNmExLDEsMCwxLDAtMS42NywxLjExcy4zNS41MiwxLjUxLDIuMzVhMSwxLDAsMCwwLC44NS40Ni45NC45NCwwLDAsMCwuNTMtLjE2LDEsMSwwLDAsMCwuMzEtMS4zOEM0NS42OSw1My43Nyw0NS4zNSw1My4yNiw0NS4zNSw1My4yNlpcIi8+PHBhdGggZD1cIk0zMiw1Ni4yYTEsMSwwLDAsMC0xLDF2Mi44N2ExLDEsMCwwLDAsMiwwVjU3LjJBMSwxLDAsMCwwLDMyLDU2LjJaXCIvPjxwYXRoIGQ9XCJNMTguNDgsNTMuMjZjMCwuMDYtLjM5LjYtMS4zOSwyLjQ0YTEsMSwwLDEsMCwxLjc1LDFjMS0xLjc3LDEuMzEtMi4yOSwxLjMxLTIuMjlhMSwxLDAsMCwwLTEuNjctMS4xMVpcIi8+PHBhdGggZD1cIk05Ljc0LDQzLjYyYTMwLjIzLDMwLjIzLDAsMCwwLTIuNjMsMS41N0ExLDEsMCwwLDAsNy42NSw0N2ExLjA5LDEuMDksMCwwLDAsLjU0LS4xNmMxLjc2LTEuMTMsMi40NC0xLjQ3LDIuNDQtMS40N2ExLDEsMCwwLDAtLjg5LTEuNzlaXCIvPjxwYXRoIGQ9XCJNNy44LDMyYTEsMSwwLDAsMC0xLTFIMy45M2ExLDEsMCwxLDAsMCwySDYuOEExLDEsMCwwLDAsNy44LDMyWlwiLz48cGF0aCBkPVwiTTcuMTcsMTguODRjMS44OCwxLDIuNTcsMS4zNywyLjU3LDEuMzdhMSwxLDAsMCwwLC44OS0xLjc5cy0uNjgtLjM0LTIuNS0xLjMzYTEsMSwwLDEsMC0xLDEuNzVaXCIvPjxwYXRoIGQ9XCJNMTguNDIsMTAuNjNhMSwxLDAsMCwwLC45LjU2LDEsMSwwLDAsMCwuODktMS40NXMtLjM0LS42OS0xLjM3LTIuNTdhMSwxLDAsMSwwLTEuNzUsMUMxOC4wOCwxMCwxOC40MiwxMC42MiwxOC40MiwxMC42M1pcIi8+PC9zdmc+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02MS40MzI2LDMzLjM4ODJhLjk5ODcuOTk4NywwLDAsMC0xLjE2LjE5MDksMTkuNDk3LDE5LjQ5NywwLDAsMS0xMy45NTEyLDUuODQ5MWgtLjAyMzRBMTkuNTk5NSwxOS41OTk1LDAsMCwxLDM1LjAwNDksMy44MWExLDEsMCwwLDAtLjQ4MjQtMS44MTMsMS4yNTA3LDEuMjUwNywwLDAsMC0uNDE0MS0uMDE0MkEyOC4xMTg2LDI4LjExODYsMCwwLDAsMTAuOTcxMiw0Ni4wOTM1YTEwLjEyNzYsMTAuMTI3NiwwLDAsMC0zLjQwMzgsNi4wODcyYy0uMDYuMzg3Ny0uMDk4Ni43NDktLjExNzIsMS4wOTY2YTguMjA5Miw4LjIwOTIsMCwwLDAtNS40MzQ2LDcuNzQxMywxLDEsMCwwLDAsMSwuOTk5aC4wMDFsMjktLjAzMjdhMSwxLDAsMCwwLC45OTktMS4wMDE1LDguMjA3LDguMjA3LDAsMCwwLS40ODY5LTIuNzNjLjU0LjAzMTEsMS4wNzcxLjA0ODgsMS42MDguMDQ4OGguMDM1MmEyOC4zMjY3LDI4LjMyNjcsMCwwLDAsMjcuODAwOC0yMy44N0EuOTk5Ljk5OSwwLDAsMCw2MS40MzI2LDMzLjM4ODJaTTQuMDk0Nyw2MC4wMTY2YTYuMjEwOCw2LjIxMDgsMCwwLDEsNC42MTcyLTUuMDM1MiwxLDEsMCwwLDAsLjc1NDktLjk3LjcyODMuNzI4MywwLDAsMC0uMDMtLjI1LDguNDQ4OCw4LjQ0ODgsMCwwLDEsLjEwNjUtMS4yNzI5LDguMDk3NSw4LjA5NzUsMCwwLDEsMy4zNi01LjM2MzMsNy45NjUsNy45NjUsMCwwLDEsNC41OTQ3LTEuNDU0MWguMDFhOC4wMDQ5LDguMDA0OSwwLDAsMSw3LjEzLDQuMzM1OSw3LjUwNjEsNy41MDYxLDAsMCwxLC44MjkxLDIuNDU0Niw5LjQyODIsOS40MjgyLDAsMCwxLC4xMTQzLDEuMjAzNiwxLjY4OTIsMS42ODkyLDAsMCwwLS4wMzQyLjMyNTIsMSwxLDAsMCwwLC43NTU4Ljk3QTYuMTg5NCw2LjE4OTQsMCwwLDEsMzAuMDQsNTcuNjQ3OWE2LjA5ODMsNi4wOTgzLDAsMCwxLC44OTQ2LDIuMzM3OVpNMzQuMTcsNTYuMzAyMmgtLjAzMzJhMjYuNDk1OCwyNi40OTU4LDAsMCwxLTIuNjg3NS0uMTM5MWMtLjA5OS0uMTM3LS4yMTgzLS4yNTQ4LS4zMjUxLS4zODQ3LS4xMTM2LS4xMzgxLS4yMjMzLS4yNzg0LS4zNDUyLS40MDgzLS4xODA4LS4xOTI1LS4zNzY0LS4zNjY5LS41NzQ0LS41NC0uMTI2MS0uMTEwNi0uMjQ1Ny0uMjI3Ni0uMzc4NC0uMzNhOC4xNDQzLDguMTQ0MywwLDAsMC0uNzE3NS0uNDhjLS4xMjE2LS4wNzQ5LS4yMzUtLjE2MDktLjM2MDYtLjIyOTVhOC4yNjQsOC4yNjQsMCwwLDAtMS4xODU1LS41MzU0Yy0uMDItLjM0MjMtLjA2LS43MDYxLS4xMi0xLjEwM2E5LjQ1MzUsOS40NTM1LDAsMCwwLTEuMDQ0LTMuMDkxNCw5Ljk4MzcsOS45ODM3LDAsMCwwLTguODkwNi01LjM4OTFoLS4wMTE3YTEwLjEwNTksMTAuMTA1OSwwLDAsMC0xLjE2NS4wNzU0Yy0uMDY3Mi4wMDc5LS4xMzQ1LjAxNDEtLjIwMTQuMDIzM2E5Ljk2NjMsOS45NjYzLDAsMCwwLTEuMDkyNy4yMTMzYy0uMDY2NC4wMTY4LS4xMzE2LjAzNi0uMTk3NS4wNTQyYTkuODc3Nyw5Ljg3NzcsMCwwLDAtMS4wOS4zNjMybC0uMDIyNC4wMWE5Ljk5MzEsOS45OTMxLDAsMCwwLTEuMDM2Ny41MDEyYy0uMDMxOS4wMTc2LS4wNjYzLjAyOTUtLjA5ODEuMDQ3NUEyNi4xNTQ5LDI2LjE1NDksMCwwLDEsMzEuNDc3NSw0LjExNjJhMjEuNiwyMS42LDAsMCwwLDE0LjgyLDM3LjMxMmguMDI1M2EyMS40NSwyMS40NSwwLDAsMCwxMy4wNi00LjQwNTdBMjYuMzUxNiwyNi4zNTE2LDAsMCwxLDM0LjE3LDU2LjMwMjJaXCIvPjwvc3ZnPmA7XG5cbiAgICAgIGNhc2UgMTAwMzpcbiAgICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGA8c3ZnIGlkPVwiRXhwYW5kZWRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZS8+PHBhdGggZD1cIk0zOSwxMi41OGExLDEsMCwwLDAsMS0xVjkuNDRhMSwxLDAsMSwwLTIsMHYyLjE0QTEsMSwwLDAsMCwzOSwxMi41OFpcIi8+PHBhdGggZD1cIk00Ny45MiwxNWEuOTEuOTEsMCwwLDAsLjQ1LjExLDEsMSwwLDAsMCwuODktLjU1cy4yNi0uNSwxLjA5LTEuODFhMSwxLDAsMSwwLTEuNjktMS4wNywyMS40NCwyMS40NCwwLDAsMC0xLjE4LDJBMSwxLDAsMCwwLDQ3LjkyLDE1WlwiLz48cGF0aCBkPVwiTTU1LjMzLDIxLjk0YTEsMSwwLDAsMCwuNTQtLjE3cy40LS4yNSwxLjctMWExLDEsMCwxLDAtMS0xLjc2Yy0xLjM5Ljc2LTEuOCwxLTEuODQsMS4wNmExLDEsMCwwLDAsLjU2LDEuODNaXCIvPjxwYXRoIGQ9XCJNNjAsMjkuNDJINTcuODVhMSwxLDAsMCwwLDAsMkg2MGExLDEsMCwwLDAsMC0yWlwiLz48cGF0aCBkPVwiTTU3LjYzLDQwLjA3bC0xLjc1LTEuMTNhMSwxLDAsMSwwLTEuMTEsMS42N2wxLjc5LDEuMTVhMSwxLDAsMCwwLDEuMzgtLjMxQTEsMSwwLDAsMCw1Ny42Myw0MC4wN1pcIi8+PHBhdGggZD1cIk0yMC4zMywyMC44MWMxLjQyLjc3LDEuOTMsMSwxLjkzLDFhMS4wNiwxLjA2LDAsMCwwLC40NS4xMSwxLDEsMCwwLDAsLjg5LS41NUExLDEsMCwwLDAsMjMuMTYsMjBzLS41Mi0uMjUtMS44Ny0xYTEsMSwwLDAsMC0xLjM2LjRBMSwxLDAsMCwwLDIwLjMzLDIwLjgxWlwiLz48cGF0aCBkPVwiTTI4LjY0LDE0LjU2YTEsMSwwLDAsMCwuOS41NUExLDEsMCwwLDAsMzAsMTVhMSwxLDAsMCwwLC40NS0xLjM0cy0uMjYtLjUyLTEtMS45M2ExLDEsMCwxLDAtMS43NSwxQzI4LjM4LDE0LDI4LjYzLDE0LjU1LDI4LjY0LDE0LjU2WlwiLz48cGF0aCBkPVwiTTUwLjM2LDQyLjg4YTEwLjY1LDEwLjY1LDAsMCwwLS43NC0yLjE5LDE0LjI5LDE0LjI5LDAsMCwwLDMuNjMtNi40NkExNC41OCwxNC41OCwwLDAsMCw1MS44LDIzYTE0LjgxLDE0LjgxLDAsMCwwLTI2LjksMi42NEExNC44MywxNC44MywwLDAsMCwxMC40MSwzOC43YTguNDYsOC40NiwwLDAsMCwxLjA1LDE2Ljg2SDQ5LjY4YTYuNDEsNi40MSwwLDAsMCw2LjE0LTYuNDNBNi4zMSw2LjMxLDAsMCwwLDUwLjM2LDQyLjg4Wk00Mi4yOSwxOGExMi45LDEyLjksMCwwLDEsNy43Nyw2LDEyLjk0LDEyLjk0LDAsMCwxLTEuNDgsMTQuODksMTAuNjcsMTAuNjcsMCwwLDAtNi00LjFsLS4xLDBjLS4zMy0uMDgtLjY2LS4xNC0xLS4xOWwtLjI3LDBBOC42Miw4LjYyLDAsMCwwLDQwLDM0LjQ4Yy0uMzksMC0uNzUsMC0xLjEzLDBBMTQuNjMsMTQuNjMsMCwwLDAsMjcsMjUuNzIsMTIuNzQsMTIuNzQsMCwwLDEsNDIuMjksMThabTcuMzQsMzUuNThIMTEuNDZhNi40Niw2LjQ2LDAsMCwxLS4xMy0xMi45MWguOTVsLjA1LS45M0ExMywxMywwLDAsMSwyNS4yNCwyNy42M2ExMi4xLDEyLjEsMCwwLDEsMS4yMS4wNmwuMjcsMGMuMzUsMCwuNjkuMDksMSwuMTZsLjEzLDBBMTIuOTMsMTIuOTMsMCwwLDEsMzguMTQsNDAuNTNhMTAuMjksMTAuMjksMCwwLDEtLjU2LDMuOCwxLDEsMCwwLDAsLjU2LDEuMywxLDEsMCwwLDAsLjM3LjA3LDEsMSwwLDAsMCwuOTMtLjYyLDEyLjM5LDEyLjM5LDAsMCwwLC43LTQuNTUsMTUuMDYsMTUuMDYsMCwwLDAtLjU3LTQuMDVINDBhNy4xNyw3LjE3LDAsMCwxLDEsLjA3bC4yLDBBOC41Nyw4LjU3LDAsMCwxLDQ3LjQ5LDQxbC40Ny44NkE5LDksMCwwLDEsNDguNTIsNDRsLjExLjg3aC44OGE0LjM3LDQuMzcsMCwwLDEsNC4zMSw0LjMxQTQuNDEsNC40MSwwLDAsMSw0OS42Myw1My41NlpcIi8+PC9zdmc+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTYwLjc5LDMxLjY5YTEsMSwwLDAsMC0xLjEtLjM0LDkuNTMsOS41MywwLDAsMS02LjIzLTE4LDEsMSwwLDAsMCwuNjQtMSwxLDEsMCwwLDAtLjctLjkyLDEzLjY5LDEzLjY5LDAsMCwwLTguNzQuMTRoMGExNCwxNCwwLDAsMC05LjQ0LDEyLjE4LDE1LjU1LDE1LjU1LDAsMCwwLTUuNzgtMi4yNWMtLjI1LS4wNS0uNDktLjA5LS43NC0uMTJsLS41Ni0uMDZjLS40NywwLS45My0uMDctMS40MS0uMDdhMTUuODgsMTUuODgsMCwwLDAtMTUuMzYsMTEuOC4yNC4yNCwwLDAsMSwwLC4wOGMtLjEuNC0uMTkuOC0uMjYsMS4yMiwwLC4xOS0uMDYuMzgtLjA5LjU4cy0uMDYuMjktLjA3LjQzQTguOTIsOC45MiwwLDAsMCwxMiw1My4xOEg1Mi44M2E2LjYzLDYuNjMsMCwwLDAsNi41NS02LjY4LDYuNzgsNi43OCwwLDAsMC01LjgzLTYuNzYsMTEuMzMsMTEuMzMsMCwwLDAtLjM4LTEuMzNsLjY3LS4xNmExMy43OCwxMy43OCwwLDAsMCw3LTUuNDFBMSwxLDAsMCwwLDYwLjc5LDMxLjY5Wk01Ny4zOCw0Ni41YTQuNjIsNC42MiwwLDAsMS00LjU1LDQuNjhIMTJhNi45Miw2LjkyLDAsMCwxLS4xMy0xMy44M2guOTRsLjA1LS45NGMwLS4zLjA2LS41OS4wOS0uODlzMC0uMzguMDctLjU3YzAsMCwwLDAsMC0uMDZhMTQsMTQsMCwwLDEsMTMuNzEtMTEuNmMuNDIsMCwuODMsMCwxLjI0LjA2bC41My4wNi42MS4xLjczLjE0LjEzLDBhMTMuODIsMTMuODIsMCwwLDEsNS41MiwyLjc5cy4wNS4wOC4wOS4xYTEzLjYzLDEzLjYzLDAsMCwxLDEuMjUsMS4xNmwwLC4wNWExMi4xNywxMi4xNywwLDAsMSwxLDEuMjNsLjE4LjI0YTE0LjEsMTQuMSwwLDAsMSwuODcsMS4zOS41NC41NCwwLDAsMSwwLC4xMSwxNC4yNywxNC4yNywwLDAsMSwuNjYsMS40MywxNCwxNCwwLDAsMSwxLDUuMTFBMTEuODEsMTEuODEsMCwwLDEsNDAsNDEuNDJhMSwxLDAsMCwwLC42LDEuMjksMSwxLDAsMCwwLC4zNC4wNiwxLDEsMCwwLDAsLjk0LS42NiwxMy42LDEzLjYsMCwwLDAsLjczLTQuODFBMTYsMTYsMCwwLDAsNDIsMzIuOWguNTdhOC4xMSw4LjExLDAsMCwxLDEuMjEuMDlsLjE3LDBhOS4yOSw5LjI5LDAsMCwxLDYuOTIsNS4xNCwxLDEsMCwwLDAsLjE3LjI1LDguOTMsOC45MywwLDAsMSwuNjgsMi40M2wuMTIuODZoLjg4QTQuNzYsNC43NiwwLDAsMSw1Ny4zOCw0Ni41Wk01My4yNiwzNi4zM2wtLjk0LjIzQTExLjI4LDExLjI4LDAsMCwwLDQ0LjE0LDMxbC0uMjIsMGExMi40NCwxMi40NCwwLDAsMC0xLjM3LS4wOWMtLjQ0LDAtLjg0LDAtMS4yNiwwLS4xLS4yMy0uMjItLjQ2LS4zMy0uNjhhMTQuNjMsMTQuNjMsMCwwLDAtLjc1LTEuMzVsMC0uMDdhMTYuMDcsMTYuMDcsMCwwLDAtMy0zLjU2LDEyLjA2LDEyLjA2LDAsMCwxLDguMTUtMTEuNzgsMTEuOTQsMTEuOTQsMCwwLDEsNC44Ni0uNjRBMTEuNTIsMTEuNTIsMCwwLDAsNDUuOTMsMjZhMTEuNjgsMTEuNjgsMCwwLDAsMTEuNTQsNy43OEExMS45MywxMS45MywwLDAsMSw1My4yNiwzNi4zM1pcIi8+PC9zdmc+YDtcblxuICAgICAgY2FzZSAxMDA2OlxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTU4LjE4LDM3LjM1YTEyLjI4LDEyLjI4LDAsMCwwLC45My00LjU4LDEyLDEyLDAsMCwwLTEyLTEyaC0uNjNhOSw5LDAsMCwwLTguNi02LjY0LDguNjgsOC42OCwwLDAsMC02LjkzLDMuMywxNi40LDE2LjQsMCwwLDAtMy40OS0uMzRjLS41MywwLTEuMDUsMC0xLjU2LjA3YTE2LjMyLDE2LjMyLDAsMCwwLTEwLjM3LDVsLS4wOS4xYy0uMjQuMjUtLjQ3LjUyLS42OS43OXMtLjI0LjI5LS4zNS40NC0uMjYuMzUtLjM5LjUzLS4zNy41NC0uNTQuODJsLS4xNS4yNGExNS45MSwxNS45MSwwLDAsMC0yLDUuNTlzMCwuMDcsMCwuMTFjMCwuMjItLjA4LjQ1LS4xMS42OGE5LjIzLDkuMjMsMCwwLDAsMSwxOC4zOUg1NC4yNGE2Ljk0LDYuOTQsMCwwLDAsMy45NC0xMi41MlptLTQsMTAuNTJoLTQyYTcuMjMsNy4yMywwLDAsMS0uMDktMTQuNDZsLjkxLDAsLjA2LS45YTE0LjQxLDE0LjQxLDAsMCwxLDI4Ljc4LDEsMTQuNzIsMTQuNzIsMCwwLDEtLjY2LDQuMzIsMSwxLDAsMCwwLC42NiwxLjI1LDEsMSwwLDAsMCwuMjkuMDUsMSwxLDAsMCwwLDEtLjcxLDE2LjY4LDE2LjY4LDAsMCwwLC43NS00LjkxLDE3LjE1LDE3LjE1LDAsMCwwLS4xOS0yLjQsOC41OCw4LjU4LDAsMCwxLDMsLjgxLDgsOCwwLDAsMSwzLjY4LDEwLjYzLDEsMSwwLDAsMCwuNDcsMS4zMy45NC45NCwwLDAsMCwuNDMuMSwxLDEsMCwwLDAsLjktLjU3LDEwLDEwLDAsMCwwLTQuNjMtMTMuMywxMC40MSwxMC40MSwwLDAsMC00LjMtMUExNi40NSwxNi40NSwwLDAsMCwzMywxOC4wOWE2Ljc3LDYuNzcsMCwwLDEsNC44My0yQTcsNywwLDAsMSw0NC42OSwyMmwuMTcsMS4wOCwxLjA2LS4yNmE0Ljg0LDQuODQsMCwwLDEsMS4xNy0uMDksMTAsMTAsMCwwLDEsMTAsMTBBMTAuNjgsMTAuNjgsMCwwLDEsNTYsMzcuMzJsLS4zOS44Ni44My40NGE0LjkzLDQuOTMsMCwwLDEtMi4yNSw5LjI1WlwiLz48L3N2Zz5gO1xuXG4gICAgICBjYXNlIDEwMzA6XG4gICAgICBjYXNlIDExMzU6XG4gICAgICBjYXNlIDExNDc6XG4gICAgICAgIHJldHVybiBgPHN2ZyBpZD1cIkV4cGFuZGVkXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGUvPjxwYXRoIGQ9XCJNNTguMTgsMjkuMzlhMTIuMzIsMTIuMzIsMCwwLDAsLjkzLTQuNTgsMTIsMTIsMCwwLDAtMTItMTJoLS42NGE5LDksMCwwLDAtOC42LTYuNjQsOC42OCw4LjY4LDAsMCwwLTYuOTMsMy4zLDE2LjQsMTYuNCwwLDAsMC0zLjQ5LS4zNGMtLjUyLDAtMS4wNSwwLTEuNTYuMDdhMTYuMjQsMTYuMjQsMCwwLDAtMTAuMzUsNWwtLjEyLjEyYy0uMjMuMjUtLjQ1LjUxLS42Ny43OGwtLjM3LjQ1Yy0uMTMuMTctLjI1LjM0LS4zNy41MnMtLjM4LjU1LS41Ni44M2wtLjEzLjIzYTE1LjksMTUuOSwwLDAsMC0yLjA1LDUuNnMwLC4wNywwLC4xYzAsLjIzLS4wOC40Ni0uMTEuNjlhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzlINTQuMjRhNi45NCw2Ljk0LDAsMCwwLDMuOTQtMTIuNTJabS00LDEwLjUyaC00MmE3LjIzLDcuMjMsMCwwLDEtLjA5LTE0LjQ2bC45MSwwLC4wNi0uOTFhMTQuNDEsMTQuNDEsMCwwLDEsMjguNzgsMSwxNC43MiwxNC43MiwwLDAsMS0uNjYsNC4zMiwxLDEsMCwwLDAsLjY2LDEuMjUsMSwxLDAsMCwwLC4yOS4wNSwxLDEsMCwwLDAsMS0uNzEsMTYuNzMsMTYuNzMsMCwwLDAsLjc1LTQuOTEsMTcuNDEsMTcuNDEsMCwwLDAtLjE5LTIuNDEsOC44OSw4Ljg5LDAsMCwxLDMsLjgyLDgsOCwwLDAsMSwzLjY4LDEwLjYzLDEsMSwwLDAsMCwuNDcsMS4zMy45NC45NCwwLDAsMCwuNDMuMSwxLDEsMCwwLDAsLjktLjU3LDEwLDEwLDAsMCwwLTQuNjMtMTMuMywxMC40MSwxMC40MSwwLDAsMC00LjMtMUExNi40MiwxNi40MiwwLDAsMCwzMywxMC4xM2E2LjczLDYuNzMsMCwwLDEsNC44Mi0yLDcsNywwLDAsMSw2LjgzLDUuOWwuMTcsMS4wOCwxLjA2LS4yNmE0Ljg4LDQuODgsMCwwLDEsMS4xOC0uMDksMTAsMTAsMCwwLDEsMTAsMTBBMTAuNjgsMTAuNjgsMCwwLDEsNTYsMjkuMzZsLS4zOS44Ni44My40NGE0LjkzLDQuOTMsMCwwLDEtMi4yNSw5LjI1WlwiLz48cGF0aCBkPVwiTTU1LjMyLDQ0LjQ5YTQuMDgsNC4wOCwwLDAsMC0yLjkyLDEuMjUsMi4xLDIuMSwwLDAsMS0xLjU5Ljc1LDIuMTMsMi4xMywwLDAsMS0xLjU5LS43NSw0LDQsMCwwLDAtNS44MywwLDIsMiwwLDAsMS0zLjE3LDAsNCw0LDAsMCwwLTUuODMsMCwyLjA2LDIuMDYsMCwwLDEtMy4xOCwwLDQsNCwwLDAsMC01LjgyLDAsMi4wNiwyLjA2LDAsMCwxLTMuMTgsMCw0LDQsMCwwLDAtMi45MS0xLjI1LDQuMSw0LjEsMCwwLDAtMi45MiwxLjI1LDIsMiwwLDAsMS0zLjE2LDAsNC4xLDQuMSwwLDAsMC0yLjkyLTEuMjUsMSwxLDAsMCwwLDAsMiwyLjEyLDIuMTIsMCwwLDEsMS41OS43NSw0LDQsMCwwLDAsNS44MiwwLDIsMiwwLDAsMSwzLjE3LDAsNCw0LDAsMCwwLDUuODMsMCwyLjA2LDIuMDYsMCwwLDEsMy4xOCwwLDQsNCwwLDAsMCw1LjgzLDAsMiwyLDAsMCwxLDMuMTcsMCw0LDQsMCwwLDAsNS44MywwLDIuMDYsMi4wNiwwLDAsMSwzLjE4LDAsNCw0LDAsMCwwLDUuODMsMCwyLjEzLDIuMTMsMCwwLDEsMS41OS0uNzUsMSwxLDAsMCwwLDAtMlpcIi8+PHBhdGggZD1cIk01NS4zMiw0OS4xNmE0LjEyLDQuMTIsMCwwLDAtMi45MiwxLjI1LDIuMSwyLjEsMCwwLDEtMS41OS43NSwyLjEzLDIuMTMsMCwwLDEtMS41OS0uNzUsNCw0LDAsMCwwLTUuODMsMCwyLDIsMCwwLDEtMy4xNywwLDQsNCwwLDAsMC01LjgzLDAsMi4wNiwyLjA2LDAsMCwxLTMuMTgsMCw0LDQsMCwwLDAtNS44MiwwLDIuMDYsMi4wNiwwLDAsMS0zLjE4LDAsNCw0LDAsMCwwLTUuODMsMCwyLjEsMi4xLDAsMCwxLTEuNTguNzUsMi4xMiwyLjEyLDAsMCwxLTEuNTgtLjc0LDQuMDYsNC4wNiwwLDAsMC0yLjkyLTEuMjYsMSwxLDAsMSwwLDAsMiwyLjEyLDIuMTIsMCwwLDEsMS41OS43NSw0LDQsMCwwLDAsNS44MiwwLDIsMiwwLDAsMSwzLjE3LDAsNCw0LDAsMCwwLDUuODMsMCwyLjA2LDIuMDYsMCwwLDEsMy4xOCwwLDQsNCwwLDAsMCw1LjgzLDAsMiwyLDAsMCwxLDMuMTcsMCw0LDQsMCwwLDAsNS44MywwLDIuMDYsMi4wNiwwLDAsMSwzLjE4LDAsNCw0LDAsMCwwLDUuODMsMCwyLjEzLDIuMTMsMCwwLDEsMS41OS0uNzUsMSwxLDAsMCwwLDAtMlpcIi8+PHBhdGggZD1cIk01NS4zMiw1My44M2E0LjA4LDQuMDgsMCwwLDAtMi45MiwxLjI2LDIuMDksMi4wOSwwLDAsMS0xLjU5Ljc0LDIuMTIsMi4xMiwwLDAsMS0xLjU5LS43NCw0LDQsMCwwLDAtNS44MywwLDIuMDcsMi4wNywwLDAsMS0zLjE3LDAsNCw0LDAsMCwwLTUuODMsMCwyLjA4LDIuMDgsMCwwLDEtMy4xOCwwLDQsNCwwLDAsMC01LjgyLDAsMi4wOCwyLjA4LDAsMCwxLTMuMTgsMCw0LDQsMCwwLDAtNS44MywwLDIuMDYsMi4wNiwwLDAsMS0zLjE2LDAsNC4wNiw0LjA2LDAsMCwwLTIuOTItMS4yNiwxLDEsMCwxLDAsMCwyLDIuMTIsMi4xMiwwLDAsMSwxLjU5Ljc1LDQsNCwwLDAsMCw1LjgyLDAsMiwyLDAsMCwxLDMuMTcsMCw0LDQsMCwwLDAsNS44MywwLDIuMDYsMi4wNiwwLDAsMSwzLjE4LDAsNCw0LDAsMCwwLDUuODMsMCwyLDIsMCwwLDEsMy4xNywwLDQsNCwwLDAsMCw1LjgzLDAsMi4wNiwyLjA2LDAsMCwxLDMuMTgsMCw0LDQsMCwwLDAsNS44MywwLDIuMTMsMi4xMywwLDAsMSwxLjU5LS43NSwxLDEsMCwxLDAsMC0yWlwiLz48L3N2Zz5gO1xuXG4gICAgICBjYXNlIDEwNjM6XG4gICAgICBjYXNlIDExODA6XG4gICAgICBjYXNlIDExODM6XG4gICAgICBjYXNlIDExODY6XG4gICAgICBjYXNlIDExODk6XG4gICAgICBjYXNlIDExOTg6XG4gICAgICBjYXNlIDEyMDE6XG4gICAgICAgIHJldHVybiBgPHN2ZyBpZD1cIkV4cGFuZGVkXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGUvPjxwYXRoIGQ9XCJNNTguMTgsMzMuMDlhMTIuMzIsMTIuMzIsMCwwLDAsLjkzLTQuNTgsMTIsMTIsMCwwLDAtMTItMTJoLS42M2E5LDksMCwwLDAtOC42LTYuNjQsOC42OCw4LjY4LDAsMCwwLTYuOTMsMy4zLDE2LjQsMTYuNCwwLDAsMC0zLjQ5LS4zNGMtLjUzLDAtMS4wNSwwLTEuNTYuMDdhMTYuMzIsMTYuMzIsMCwwLDAtMTAuMzcsNWwtLjA5LjFjLS4yNC4yNS0uNDcuNTItLjY5Ljc5bC0uMzUuNDNjLS4xNC4xOC0uMjYuMzYtLjM5LjU0cy0uMzcuNTQtLjU0LjgxbC0uMTUuMjVhMTUuODQsMTUuODQsMCwwLDAtMiw1LjU5czAsLjA3LDAsLjFjMCwuMjMtLjA4LjQ2LS4xMS42OWE5LjIzLDkuMjMsMCwwLDAsMSwxOC4zOUg1NC4yNGE2Ljk0LDYuOTQsMCwwLDAsMy45NC0xMi41MlptLTQsMTAuNTJoLTQyYTcuMjMsNy4yMywwLDAsMS0uMDktMTQuNDZsLjkxLDAsLjA2LS45MWExNC40MSwxNC40MSwwLDAsMSwyOC43OCwxLDE0LjcyLDE0LjcyLDAsMCwxLS42Niw0LjMyLDEsMSwwLDAsMCwuNjYsMS4yNSwxLDEsMCwwLDAsLjI5LjA1LDEsMSwwLDAsMCwxLS43MSwxNi43MywxNi43MywwLDAsMCwuNzUtNC45MSwxNy40MSwxNy40MSwwLDAsMC0uMTktMi40MSw4LjgzLDguODMsMCwwLDEsMywuODIsOCw4LDAsMCwxLDMuNjgsMTAuNjMsMSwxLDAsMCwwLC40NywxLjMzLjk0Ljk0LDAsMCwwLC40My4xLDEsMSwwLDAsMCwuOS0uNTcsMTAsMTAsMCwwLDAtNC42My0xMy4zLDEwLjQxLDEwLjQxLDAsMCwwLTQuMy0xQTE2LjQzLDE2LjQzLDAsMCwwLDMzLDEzLjgzYTYuNzcsNi43NywwLDAsMSw0LjgzLTIsNyw3LDAsMCwxLDYuODMsNS45bC4xNywxLjA4LDEuMDYtLjI2YTQuODQsNC44NCwwLDAsMSwxLjE3LS4wOSwxMCwxMCwwLDAsMSwxMCwxMEExMC42OCwxMC42OCwwLDAsMSw1NiwzMy4wNmwtLjM5Ljg2LjgzLjQ0YTQuOTMsNC45MywwLDAsMS0yLjI1LDkuMjVaXCIvPjxwYXRoIGQ9XCJNMjYuNDcsNDguMTZhMSwxLDAsMCwwLTEuMjcuNjFsLTEuNDIsNGExLDEsMCwwLDAsLjYxLDEuMjgsMS4yNiwxLjI2LDAsMCwwLC4zMy4wNSwxLDEsMCwwLDAsLjk0LS42NmwxLjQyLTRBMSwxLDAsMCwwLDI2LjQ3LDQ4LjE2WlwiLz48cGF0aCBkPVwiTTM5LjY0LDQ4LjE3YTEsMSwwLDAsMC0xLjI5LjU4bC0xLjU0LDRhMSwxLDAsMCwwLC41NywxLjI5LDEuMTMsMS4xMywwLDAsMCwuMzYuMDYsMSwxLDAsMCwwLC45NC0uNjRsMS41My00QTEsMSwwLDAsMCwzOS42NCw0OC4xN1pcIi8+PC9zdmc+YDtcblxuICAgICAgY2FzZSAxMDY2OlxuICAgICAgY2FzZSAxMDY5OlxuICAgICAgY2FzZSAxMjA0OlxuICAgICAgY2FzZSAxMjA3OlxuICAgICAgY2FzZSAxMjEwOlxuICAgICAgY2FzZSAxMjEzOlxuICAgICAgY2FzZSAxMjE2OlxuICAgICAgY2FzZSAxMjU1OlxuICAgICAgY2FzZSAxMjc5OlxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTU4LjE4LDM0LjUzQTEyLjI4LDEyLjI4LDAsMCwwLDU5LjExLDMwYTEyLDEyLDAsMCwwLTEyLTEyaC0uNjNhOSw5LDAsMCwwLTguNi02LjY0LDguNjgsOC42OCwwLDAsMC02LjkzLDMuMywxNi40LDE2LjQsMCwwLDAtMy40OS0uMzRjLS41MywwLTEuMDUsMC0xLjU2LjA3YTE2LjMyLDE2LjMyLDAsMCwwLTEwLjM3LDVsLS4wOS4xYy0uMjQuMjYtLjQ3LjUyLS42OS43OXMtLjI0LjI5LS4zNS40NC0uMjYuMzUtLjM5LjUzLS4zNy41NC0uNTQuODJsLS4xNS4yNGExNS45MSwxNS45MSwwLDAsMC0yLDUuNTlzMCwuMDcsMCwuMTFjMCwuMjMtLjA4LjQ1LS4xMS42OGE5LjIzLDkuMjMsMCwwLDAsMSwxOC4zOUg1NC4yNGE2Ljk0LDYuOTQsMCwwLDAsMy45NC0xMi41MlptLTQsMTAuNTJoLTQyYTcuMjMsNy4yMywwLDAsMS0uMDktMTQuNDVsLjkxLDAsLjA2LS45YTE0LjQxLDE0LjQxLDAsMCwxLDI4Ljc4LDFBMTQuNzIsMTQuNzIsMCwwLDEsNDEuMTcsMzVhMSwxLDAsMCwwLC42NiwxLjI1LDEsMSwwLDAsMCwuMjkuMDUsMSwxLDAsMCwwLDEtLjcxLDE2LjY4LDE2LjY4LDAsMCwwLC43NS00LjkxLDE3LjE1LDE3LjE1LDAsMCwwLS4xOS0yLjQsOC44LDguOCwwLDAsMSwzLC44MUE4LDgsMCwwLDEsNTAuMzQsMzkuNywxLDEsMCwwLDAsNTAuODEsNDFhMS4wNywxLjA3LDAsMCwwLC40My4wOSwxLDEsMCwwLDAsLjktLjU3LDEwLDEwLDAsMCwwLTQuNjMtMTMuMywxMC40MSwxMC40MSwwLDAsMC00LjMtMUExNi40NSwxNi40NSwwLDAsMCwzMywxNS4yN2E2Ljc3LDYuNzcsMCwwLDEsNC44My0yLDcsNywwLDAsMSw2LjgzLDUuOWwuMTcsMS4wOEw0NS45MiwyMGE0Ljg0LDQuODQsMCwwLDEsMS4xNy0uMDksMTAsMTAsMCwwLDEsMTAsMTBBMTAuNjgsMTAuNjgsMCwwLDEsNTYsMzQuNWwtLjM5Ljg2LjgzLjQ1YTQuOTMsNC45MywwLDAsMS0yLjI1LDkuMjRaXCIvPjxwYXRoIGQ9XCJNMjQuOSw0OS44MWExLjQ0LDEuNDQsMCwxLDAsMS40NCwxLjQ0QTEuNDQsMS40NCwwLDAsMCwyNC45LDQ5LjgxWlwiLz48cGF0aCBkPVwiTTM5LjEsNDkuODFhMS40NCwxLjQ0LDAsMSwwLDEuNDQsMS40NEExLjQzLDEuNDMsMCwwLDAsMzkuMSw0OS44MVpcIi8+PC9zdmc+YDtcblxuICAgICAgY2FzZSAxMDcyOlxuICAgICAgY2FzZSAxMTUwOlxuICAgICAgY2FzZSAxMTUzOlxuICAgICAgY2FzZSAxMjQwOlxuICAgICAgY2FzZSAxMjQ5OlxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTU4LjE4LDMxLjMyYTEyLjM3LDEyLjM3LDAsMCwwLC45My00LjU5LDEyLDEyLDAsMCwwLTEyLTEyaC0uNjNhOSw5LDAsMCwwLTguNi02LjY0LDguNyw4LjcsMCwwLDAtNi45MywzLjMsMTYuNCwxNi40LDAsMCwwLTMuNDktLjM0Yy0uNTMsMC0xLjA1LDAtMS41Ni4wN2ExNi4zMiwxNi4zMiwwLDAsMC0xMC4zNyw1bC0uMDkuMWMtLjI0LjI2LS40Ny41Mi0uNjkuNzlzLS4yNC4yOS0uMzUuNDQtLjI2LjM1LS4zOS41My0uMzcuNTQtLjU0LjgybC0uMTUuMjVhMTUuNzksMTUuNzksMCwwLDAtMiw1LjU4czAsLjA3LDAsLjExYzAsLjIzLS4wOC40NS0uMTEuNjhhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzlINTQuMjRhNi45Myw2LjkzLDAsMCwwLDMuOTQtMTIuNTFabS00LDEwLjUxaC00MmE3LjIzLDcuMjMsMCwwLDEtLjA5LTE0LjQ1bC45MSwwLC4wNi0uOWExNC40MSwxNC40MSwwLDAsMSwyOC43OCwxLDE0LjcyLDE0LjcyLDAsMCwxLS42Niw0LjMyQTEsMSwwLDAsMCw0MS44MywzM2ExLDEsMCwwLDAsLjI5LjA1LDEsMSwwLDAsMCwxLS43MSwxNi42OCwxNi42OCwwLDAsMCwuNzUtNC45MSwxNy4xNSwxNy4xNSwwLDAsMC0uMTktMi40LDguOCw4LjgsMCwwLDEsMywuODEsOCw4LDAsMCwxLDMuNjgsMTAuNjMsMSwxLDAsMCwwLC40NywxLjM0LDEuMDcsMS4wNywwLDAsMCwuNDMuMDksMSwxLDAsMCwwLC45LS41NywxMCwxMCwwLDAsMC00LjYzLTEzLjI5LDEwLjI4LDEwLjI4LDAsMCwwLTQuMy0xQTE2LjQ1LDE2LjQ1LDAsMCwwLDMzLDEyLjA1YTYuNzcsNi43NywwLDAsMSw0LjgzLTJBNyw3LDAsMCwxLDQ0LjY5LDE2bC4xNywxLjA4LDEuMDYtLjI2YTQuODQsNC44NCwwLDAsMSwxLjE3LS4wOSwxMCwxMCwwLDAsMSwxMCwxMEExMC42OCwxMC42OCwwLDAsMSw1NiwzMS4yOGwtLjM5Ljg2LjgzLjQ1YTQuOTMsNC45MywwLDAsMS0yLjI1LDkuMjRaXCIvPjxwYXRoIGQ9XCJNMjMuNzcsNDYuNGExLDEsMCwwLDAtMS4yOS41N2wtMS41NCw0YTEsMSwwLDAsMCwuNTgsMS4yOS45Mi45MiwwLDAsMCwuMzYuMDcsMSwxLDAsMCwwLC45My0uNjVsMS41NC00QTEsMSwwLDAsMCwyMy43Nyw0Ni40WlwiLz48cGF0aCBkPVwiTTQyLjM2LDQ2LjRhMSwxLDAsMCwwLTEuMjkuNTdsLTEuNTQsNGExLDEsMCwwLDAsLjU4LDEuMjkuOTEuOTEsMCwwLDAsLjM1LjA3LDEsMSwwLDAsMCwuOTQtLjY1bDEuNTQtNEExLDEsMCwwLDAsNDIuMzYsNDYuNFpcIi8+PHBhdGggZD1cIk0zMy43LDQ2LjM5YTEsMSwwLDAsMC0xLjI4LjZMMjkuNyw1NC41N2ExLDEsMCwwLDAsLjYsMS4yOCwxLDEsMCwwLDAsLjM0LjA2LDEsMSwwLDAsMCwuOTQtLjY2bDIuNzItNy41OEExLDEsMCwwLDAsMzMuNyw0Ni4zOVpcIi8+PC9zdmc+YDtcblxuICAgICAgY2FzZSAxMTY4OlxuICAgICAgY2FzZSAxMTkyOlxuICAgICAgY2FzZSAxMTk1OlxuICAgICAgY2FzZSAxMjQzOlxuICAgICAgY2FzZSAxMjQ2OlxuICAgICAgY2FzZSAxMjUyOlxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTU4LjE4LDMxLjMyYTEyLjM3LDEyLjM3LDAsMCwwLC45My00LjU5LDEyLDEyLDAsMCwwLTEyLTEyaC0uNjRhOSw5LDAsMCwwLTguNi02LjY0LDguNyw4LjcsMCwwLDAtNi45MywzLjMsMTYuNCwxNi40LDAsMCwwLTMuNDktLjM0Yy0uNTMsMC0xLjA1LDAtMS41Ni4wN2ExNi4yNywxNi4yNywwLDAsMC0xMC4zNiw1bC0uMTEuMWMtLjIzLjI2LS40Ni41Mi0uNjcuNzlhNC45NCw0Ljk0LDAsMCwwLS4zNi40NEE2LjQyLDYuNDIsMCwwLDAsMTQsMThjLS4xOS4yNy0uMzguNTQtLjU1LjgyLDAsLjA4LS4xLjE2LS4xNC4yNGExNS43MSwxNS43MSwwLDAsMC0yLjA1LDUuNmwwLC4wOGMwLC4yNC0uMDguNDctLjExLjdhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzlINTQuMjRhNi45Myw2LjkzLDAsMCwwLDMuOTQtMTIuNTFabS00LDEwLjUxaC00MmE3LjIzLDcuMjMsMCwwLDEtLjA5LTE0LjQ1bC45MSwwLC4wNi0uOWExNC40MSwxNC40MSwwLDAsMSwyOC43OCwxLDE0LjcyLDE0LjcyLDAsMCwxLS42Niw0LjMyQTEsMSwwLDAsMCw0MS44MywzM2ExLDEsMCwwLDAsLjI5LjA1LDEsMSwwLDAsMCwxLS43MSwxNi42OCwxNi42OCwwLDAsMCwuNzUtNC45MSwxNy4xNSwxNy4xNSwwLDAsMC0uMTktMi40LDguODYsOC44NiwwLDAsMSwzLC44MSw4LDgsMCwwLDEsMy42NywxMC42MywxLDEsMCwwLDAsLjQ4LDEuMzQsMS4wNywxLjA3LDAsMCwwLC40My4wOSwxLDEsMCwwLDAsLjktLjU3LDEwLDEwLDAsMCwwLTQuNjMtMTMuMjksMTAuMjgsMTAuMjgsMCwwLDAtNC4zLTFBMTYuNDUsMTYuNDUsMCwwLDAsMzMsMTIuMDVhNi43Nyw2Ljc3LDAsMCwxLDQuODMtMkE3LDcsMCwwLDEsNDQuNjksMTZsLjE3LDEuMDksMS4wNi0uMjdhNC44OCw0Ljg4LDAsMCwxLDEuMTgtLjA5LDEwLDEwLDAsMCwxLDEwLDEwQTEwLjY4LDEwLjY4LDAsMCwxLDU2LDMxLjI4bC0uMzkuODYuODMuNDVhNC45Myw0LjkzLDAsMCwxLTIuMjUsOS4yNFpcIi8+PHBhdGggZD1cIk0yNS43OSw0Ni40QTEsMSwwLDAsMCwyNC41LDQ3TDIzLDUxYTEsMSwwLDAsMCwuNTcsMS4yOS45Mi45MiwwLDAsMCwuMzYuMDcsMSwxLDAsMCwwLC45My0uNjVsMS41NC00QTEsMSwwLDAsMCwyNS43OSw0Ni40WlwiLz48cGF0aCBkPVwiTTQyLjYsNDYuNGExLDEsMCwwLDAtMS4yOS41N2wtMS41NCw0YTEsMSwwLDAsMCwuNTcsMS4yOS45Mi45MiwwLDAsMCwuMzYuMDcsMSwxLDAsMCwwLC45NC0uNjVsMS41NC00QTEsMSwwLDAsMCw0Mi42LDQ2LjRaXCIvPjxwYXRoIGQ9XCJNMzQuNTQsNDYuNGExLDEsMCwwLDAtMS4yOS41OGwtMi44NCw3LjU4QTEsMSwwLDAsMCwzMSw1NS44NWExLDEsMCwwLDAsMS4yOS0uNTlsMi44NC03LjU4QTEsMSwwLDAsMCwzNC41NCw0Ni40WlwiLz48cGF0aCBkPVwiTTE3LjM2LDQ2LjM5YTEsMSwwLDAsMC0xLjI4LjZsLTIuNzIsNy41OGExLDEsMCwwLDAsLjYsMS4yOCwxLDEsMCwwLDAsLjM0LjA2LDEsMSwwLDAsMCwuOTQtLjY2TDE4LDQ3LjY3QTEsMSwwLDAsMCwxNy4zNiw0Ni4zOVpcIi8+PHBhdGggZD1cIk01MC4wNSw0Ni40YTEsMSwwLDAsMC0xLjI5LjU4bC0yLjg0LDcuNThhMSwxLDAsMCwwLC41OSwxLjI5LDEsMSwwLDAsMCwuMzUuMDYsMSwxLDAsMCwwLC45My0uNjVsMi44NS03LjU4QTEsMSwwLDAsMCw1MC4wNSw0Ni40WlwiLz48L3N2Zz5gO1xuXG4gICAgICBjYXNlIDExNzE6XG4gICAgICBjYXNlIDEyNzM6XG4gICAgICBjYXNlIDEyNzY6XG4gICAgICAgIHJldHVybiBgPHN2ZyBpZD1cIkV4cGFuZGVkXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGUvPjxwYXRoIGQ9XCJNNTguMTgsMzEuMzJhMTIuMzcsMTIuMzcsMCwwLDAsLjkzLTQuNTksMTIsMTIsMCwwLDAtMTItMTJoLS42NGE5LDksMCwwLDAtOC42LTYuNjQsOC43LDguNywwLDAsMC02LjkzLDMuMywxNi40LDE2LjQsMCwwLDAtMy40OS0uMzRjLS41MywwLTEuMDUsMC0xLjU2LjA3YTE2LjI3LDE2LjI3LDAsMCwwLTEwLjM2LDVsLS4xMS4xYy0uMjMuMjYtLjQ2LjUyLS42Ny43OWE0Ljk0LDQuOTQsMCwwLDAtLjM2LjQ0QTYuNDIsNi40MiwwLDAsMCwxNCwxOGMtLjE5LjI3LS4zOC41NC0uNTUuODIsMCwuMDgtLjEuMTYtLjE0LjI0YTE1LjcxLDE1LjcxLDAsMCwwLTIuMDUsNS42bDAsLjA4YzAsLjI0LS4wOC40Ny0uMTEuN2E5LjIzLDkuMjMsMCwwLDAsMSwxOC4zOUgyMi4yM2ExLDEsMCwxLDAsMC0ySDEyLjE3YTcuMjMsNy4yMywwLDAsMS0uMDktMTQuNDVsLjkxLDAsLjA2LS45YTE0LjQxLDE0LjQxLDAsMCwxLDI4Ljc4LDEsMTQuNzIsMTQuNzIsMCwwLDEtLjY2LDQuMzJBMSwxLDAsMCwwLDQxLjgzLDMzYTEsMSwwLDAsMCwuMjkuMDUsMSwxLDAsMCwwLDEtLjcxLDE2LjY4LDE2LjY4LDAsMCwwLC43NS00LjkxLDE3LjE1LDE3LjE1LDAsMCwwLS4xOS0yLjQsOC44Niw4Ljg2LDAsMCwxLDMsLjgxLDgsOCwwLDAsMSwzLjY3LDEwLjYzLDEsMSwwLDAsMCwuNDgsMS4zNCwxLjA3LDEuMDcsMCwwLDAsLjQzLjA5LDEsMSwwLDAsMCwuOS0uNTcsMTAsMTAsMCwwLDAtNC42My0xMy4yOSwxMC4yOCwxMC4yOCwwLDAsMC00LjMtMUExNi40NSwxNi40NSwwLDAsMCwzMywxMi4wNWE2Ljc3LDYuNzcsMCwwLDEsNC44My0yQTcsNywwLDAsMSw0NC42OSwxNmwuMTcsMS4wOSwxLjA2LS4yN2E0Ljg4LDQuODgsMCwwLDEsMS4xOC0uMDksMTAsMTAsMCwwLDEsMTAsMTBBMTAuNjgsMTAuNjgsMCwwLDEsNTYsMzEuMjhsLS4zOS44Ni44My40NWE0LjkzLDQuOTMsMCwwLDEtMi4yNSw5LjI0SDMxLjk0YTEsMSwwLDEsMCwwLDJoMjIuM2E2LjkzLDYuOTMsMCwwLDAsMy45NC0xMi41MVpcIi8+PHBhdGggZD1cIk00Mi42LDQ2LjRhMSwxLDAsMCwwLTEuMjkuNTdsLTEuNTQsNGExLDEsMCwwLDAsLjU3LDEuMjkuOTIuOTIsMCwwLDAsLjM2LjA3LDEsMSwwLDAsMCwuOTQtLjY1bDEuNTQtNEExLDEsMCwwLDAsNDIuNiw0Ni40WlwiLz48cGF0aCBkPVwiTTM0LjU0LDQ2LjRhMSwxLDAsMCwwLTEuMjkuNThsLTIuODQsNy41OEExLDEsMCwwLDAsMzEsNTUuODVhMSwxLDAsMCwwLDEuMjktLjU5bDIuODQtNy41OEExLDEsMCwwLDAsMzQuNTQsNDYuNFpcIi8+PHBhdGggZD1cIk0xNy4zNiw0Ni4zOWExLDEsMCwwLDAtMS4yOC42bC0yLjcyLDcuNThhMSwxLDAsMCwwLC42LDEuMjgsMSwxLDAsMCwwLC4zNC4wNiwxLDEsMCwwLDAsLjk0LS42NkwxOCw0Ny42N0ExLDEsMCwwLDAsMTcuMzYsNDYuMzlaXCIvPjxwYXRoIGQ9XCJNNTAuMDUsNDYuNGExLDEsMCwwLDAtMS4yOS41OGwtMi44NCw3LjU4YTEsMSwwLDAsMCwuNTksMS4yOSwxLDEsMCwwLDAsLjM1LjA2LDEsMSwwLDAsMCwuOTMtLjY1bDIuODUtNy41OEExLDEsMCwwLDAsNTAuMDUsNDYuNFpcIi8+PHBhdGggZD1cIk0zMC44MywzNi41NGExLjA3LDEuMDcsMCwwLDAtMS0xLjA4aC03bDQuNjQtMTAuMzJhLjkzLjkzLDAsMCwwLS41OS0xLjI3LDEsMSwwLDAsMC0xLjM4LjQ5bC01LjMsMTEuNzlhMS4wOCwxLjA4LDAsMCwwLC41OSwxLjM4LDEsMSwwLDAsMCwuMzkuMDd2MGg3LjFMMjMuMTcsNTFhMSwxLDAsMCwwLC41OSwxLjI3LDEuMDcsMS4wNywwLDAsMCwxLjM3LS41OWw1LjU2LTE0LjYyQTEuMTEsMS4xMSwwLDAsMCwzMC44MywzNi41NFpcIi8+PC9zdmc+YDtcblxuICAgICAgY2FzZSAxMDg3OlxuICAgICAgICByZXR1cm4gYDxzdmcgaWQ9XCJFeHBhbmRlZFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlLz48cGF0aCBkPVwiTTU4LjEzLDMyLjQ1YTEyLjIyLDEyLjIyLDAsMCwwLC45Mi00LjU3LDEyLDEyLDAsMCwwLTEyLTEyaC0uNjNhOSw5LDAsMCwwLTguNTgtNi42Myw4LjY1LDguNjUsMCwwLDAtNi45MSwzLjMsMTYuNTMsMTYuNTMsMCwwLDAtMy40OS0uMzRjLS41MiwwLTEuMDUsMC0xLjU2LjA3YTE2LjMxLDE2LjMxLDAsMCwwLTEwLjMzLDVsLS4xMi4xMmMtLjIzLjI1LS40NS41MS0uNjYuNzdsLS4zOC40Ni0uMzYuNTFjLS4yLjI4LS4zOC41NS0uNTYuODRhMi41MywyLjUzLDAsMCwwLS4xMy4yMiwxNS45LDE1LjksMCwwLDAtMi4wNiw1LjYxdi4wN2MwLC4yNC0uMDguNDYtLjExLjdhOS4yMSw5LjIxLDAsMCwwLDEsMTguMzZoMTBhMSwxLDAsMCwwLDAtMmgtMTBhNy4yMiw3LjIyLDAsMCwxLS4wOS0xNC40M2wuOTEsMCwuMDYtLjlhMTQuMzgsMTQuMzgsMCwwLDEsMjguNzIsMSwxNC42NSwxNC42NSwwLDAsMS0uNjYsNC4zMSwxLDEsMCwwLDAsMSwxLjMsMSwxLDAsMCwwLDEtLjcxLDE2LjYxLDE2LjYxLDAsMCwwLC43NS00LjksMTcuMjcsMTcuMjcsMCwwLDAtLjE5LTIuNCw4Ljg0LDguODQsMCwwLDEsMywuODIsOCw4LDAsMCwxLDMuNjcsMTAuNiwxLDEsMCwwLDAsLjQ3LDEuMzMsMSwxLDAsMCwwLC40My4xLDEsMSwwLDAsMCwuOS0uNTdBMTAsMTAsMCwwLDAsNDcuNDgsMjUuMmExMC4zOSwxMC4zOSwwLDAsMC00LjI5LTFBMTYuNDEsMTYuNDEsMCwwLDAsMzMsMTMuMjNhNi43Miw2LjcyLDAsMCwxLDQuODEtMiw3LDcsMCwwLDEsNi44MSw1Ljg5bC4xNywxLjA4TDQ1Ljg5LDE4YTQuODQsNC44NCwwLDAsMSwxLjE3LS4wOSwxMCwxMCwwLDAsMSwxMCwxMEExMC42MiwxMC42MiwwLDAsMSw1NiwzMi40MmwtLjM5Ljg2LjgzLjQ0QTQuOTIsNC45MiwwLDAsMSw1NC4xNSw0M0gzMS45NGExLDEsMCwxLDAsMCwySDU0LjE5YTYuOTMsNi45MywwLDAsMCwzLjk0LTEyLjVaXCIvPjxwYXRoIGQ9XCJNMzEsMzYuNTRhMS4wNywxLjA3LDAsMCwwLTEtMS4wOEgyM2w0LjY0LTEwLjMyYS45My45MywwLDAsMC0uNTktMS4yNywxLDEsMCwwLDAtMS4zOC40OWwtNS4zLDExLjc5QTEuMDgsMS4wOCwwLDAsMCwyMSwzNy41M2ExLDEsMCwwLDAsLjM5LjA3djBoNy4xTDIzLjM0LDUxYTEsMSwwLDAsMCwuNTgsMS4yNywxLjA4LDEuMDgsMCwwLDAsMS4zOC0uNTlsNS41Ni0xNC42MkExLjExLDEuMTEsMCwwLDAsMzEsMzYuNTRaXCIvPjwvc3ZnPmA7XG5cbiAgICAgIGNhc2UgMTExNDpcbiAgICAgIGNhc2UgMTIxOTpcbiAgICAgICAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgPz48c3ZnIGlkPVwiRXhwYW5kZWRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZS8+PHBhdGggZD1cIk01OC4xOCwzNC41M0ExMi4yOCwxMi4yOCwwLDAsMCw1OS4xMSwzMGExMiwxMiwwLDAsMC0xMi0xMmgtLjYzYTksOSwwLDAsMC04LjYtNi42NCw4LjY4LDguNjgsMCwwLDAtNi45MywzLjMsMTYuNCwxNi40LDAsMCwwLTMuNDktLjM0Yy0uNTMsMC0xLjA1LDAtMS41Ni4wN2ExNi4zMiwxNi4zMiwwLDAsMC0xMC4zNyw1bC0uMDkuMWMtLjI0LjI2LS40Ny41Mi0uNjkuNzlzLS4yNC4yOS0uMzUuNDQtLjI2LjM1LS4zOS41My0uMzcuNTQtLjU0LjgybC0uMTUuMjRhMTUuOTEsMTUuOTEsMCwwLDAtMiw1LjU5czAsLjA3LDAsLjExYzAsLjIzLS4wOC40NS0uMTEuNjhhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzlINTQuMjRhNi45NCw2Ljk0LDAsMCwwLDMuOTQtMTIuNTJabS00LDEwLjUyaC00MmE3LjIzLDcuMjMsMCwwLDEtLjA5LTE0LjQ1bC45MSwwLC4wNi0uOWExNC40MSwxNC40MSwwLDAsMSwyOC43OCwxQTE0LjcyLDE0LjcyLDAsMCwxLDQxLjE3LDM1YTEsMSwwLDAsMCwuNjYsMS4yNSwxLDEsMCwwLDAsLjI5LjA1LDEsMSwwLDAsMCwxLS43MSwxNi42OCwxNi42OCwwLDAsMCwuNzUtNC45MSwxNy4xNSwxNy4xNSwwLDAsMC0uMTktMi40LDguOCw4LjgsMCwwLDEsMywuODFBOCw4LDAsMCwxLDUwLjM0LDM5LjcsMSwxLDAsMCwwLDUwLjgxLDQxYTEuMDcsMS4wNywwLDAsMCwuNDMuMDksMSwxLDAsMCwwLC45LS41NywxMCwxMCwwLDAsMC00LjYzLTEzLjMsMTAuNDEsMTAuNDEsMCwwLDAtNC4zLTFBMTYuNDUsMTYuNDUsMCwwLDAsMzMsMTUuMjdhNi43Nyw2Ljc3LDAsMCwxLDQuODMtMiw3LDcsMCwwLDEsNi44Myw1LjlsLjE3LDEuMDhMNDUuOTIsMjBhNC44NCw0Ljg0LDAsMCwxLDEuMTctLjA5LDEwLDEwLDAsMCwxLDEwLDEwQTEwLjY4LDEwLjY4LDAsMCwxLDU2LDM0LjVsLS4zOS44Ni44My40NWE0LjkzLDQuOTMsMCwwLDEtMi4yNSw5LjI0WlwiLz48cGF0aCBkPVwiTTI0LjksNDkuODFhMS40NCwxLjQ0LDAsMSwwLDEuNDQsMS40NEExLjQ0LDEuNDQsMCwwLDAsMjQuOSw0OS44MVpcIi8+PHBhdGggZD1cIk0zOS4xLDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40MywxLjQzLDAsMCwwLDM5LjEsNDkuODFaXCIvPjxwYXRoIGQ9XCJNMzIsNDkuODFhMS40NCwxLjQ0LDAsMSwwLDEuNDQsMS40NEExLjQzLDEuNDMsMCwwLDAsMzIsNDkuODFaXCIvPjwvc3ZnPmA7XG5cbiAgICAgIGNhc2UgMTExNzpcbiAgICAgICAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgPz48c3ZnIGlkPVwiRXhwYW5kZWRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZS8+PHBhdGggZD1cIk01OC4xOCwzNC41M0ExMi4yOCwxMi4yOCwwLDAsMCw1OS4xMSwzMGExMiwxMiwwLDAsMC0xMi0xMmgtLjYzYTksOSwwLDAsMC04LjYtNi42NCw4LjY4LDguNjgsMCwwLDAtNi45MywzLjMsMTYuNCwxNi40LDAsMCwwLTMuNDktLjM0Yy0uNTMsMC0xLjA1LDAtMS41Ni4wN2ExNi4zMiwxNi4zMiwwLDAsMC0xMC4zNyw1bC0uMDkuMWMtLjI0LjI2LS40Ny41Mi0uNjkuNzlzLS4yNC4yOS0uMzUuNDQtLjI2LjM1LS4zOS41My0uMzcuNTQtLjU0LjgybC0uMTUuMjRhMTUuOTEsMTUuOTEsMCwwLDAtMiw1LjU5czAsLjA3LDAsLjExYzAsLjIzLS4wOC40NS0uMTEuNjhhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzlINTQuMjRhNi45NCw2Ljk0LDAsMCwwLDMuOTQtMTIuNTJabS00LDEwLjUyaC00MmE3LjIzLDcuMjMsMCwwLDEtLjA5LTE0LjQ1bC45MSwwLC4wNi0uOWExNC40MSwxNC40MSwwLDAsMSwyOC43OCwxQTE0LjcyLDE0LjcyLDAsMCwxLDQxLjE3LDM1YTEsMSwwLDAsMCwuNjYsMS4yNSwxLDEsMCwwLDAsLjI5LjA1LDEsMSwwLDAsMCwxLS43MSwxNi43MywxNi43MywwLDAsMCwuNzUtNC45MSwxNy4xNSwxNy4xNSwwLDAsMC0uMTktMi40LDguOCw4LjgsMCwwLDEsMywuODFBOCw4LDAsMCwxLDUwLjMzLDM5LjcsMSwxLDAsMCwwLDUwLjgxLDQxYTEuMDcsMS4wNywwLDAsMCwuNDMuMDksMSwxLDAsMCwwLC45LS41NywxMCwxMCwwLDAsMC00LjYzLTEzLjMsMTAuNDEsMTAuNDEsMCwwLDAtNC4zLTFBMTYuNDUsMTYuNDUsMCwwLDAsMzMsMTUuMjdhNi43Nyw2Ljc3LDAsMCwxLDQuODMtMiw3LDcsMCwwLDEsNi44Myw1LjlsLjE2LDEuMDhMNDUuOTIsMjBhNC44NCw0Ljg0LDAsMCwxLDEuMTctLjA5LDEwLDEwLDAsMCwxLDEwLDEwQTEwLjY4LDEwLjY4LDAsMCwxLDU2LDM0LjVsLS4zOS44Ni44My40NWE0LjkzLDQuOTMsMCwwLDEtMi4yNSw5LjI0WlwiLz48cGF0aCBkPVwiTTE1LjcyLDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40MywxLjQzLDAsMCwwLDE1LjcyLDQ5LjgxWlwiLz48cGF0aCBkPVwiTTIzLjg2LDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40MywxLjQzLDAsMCwwLDIzLjg2LDQ5LjgxWlwiLz48cGF0aCBkPVwiTTMyLDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40MywxLjQzLDAsMCwwLDMyLDQ5LjgxWlwiLz48cGF0aCBkPVwiTTQwLjE0LDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40NCwxLjQ0LDAsMCwwLDQwLjE0LDQ5LjgxWlwiLz48cGF0aCBkPVwiTTQ4LjI4LDQ5LjgxYTEuNDQsMS40NCwwLDEsMCwxLjQ0LDEuNDRBMS40NCwxLjQ0LDAsMCwwLDQ4LjI4LDQ5LjgxWlwiLz48L3N2Zz5gO1xuXG4gICAgICBjYXNlIDEyMjI6XG4gICAgICBjYXNlIDEyMjU6XG4gICAgICBjYXNlIDEyMzc6XG4gICAgICBjYXNlIDEyNTg6XG4gICAgICBjYXNlIDEyNjE6XG4gICAgICBjYXNlIDEyNjQ6XG4gICAgICBjYXNlIDEyODI6XG4gICAgICAgIHJldHVybiBgPHN2ZyBpZD1cIkV4cGFuZGVkXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGUvPjxwYXRoIGQ9XCJNNTguMTgsMzRhMTIuMzIsMTIuMzIsMCwwLDAsLjkzLTQuNTgsMTIsMTIsMCwwLDAtMTItMTJoLS42NGE5LDksMCwwLDAtOC42LTYuNjQsOC42OCw4LjY4LDAsMCwwLTYuOTMsMy4zMSwxNi4zNywxNi4zNywwLDAsMC0zLjQ5LS4zNWMtLjUzLDAtMS4wNSwwLTEuNTYuMDhhMTYuMjEsMTYuMjEsMCwwLDAtMTAuMzYsNWwtLjExLjExYy0uMjMuMjUtLjQ2LjUxLS42Ny43OHMtLjI1LjI5LS4zNi40NC0uMjYuMzUtLjM4LjUzLS4zOC41NC0uNTUuODJjMCwuMDgtLjEuMTYtLjE0LjI0YTE1LjgzLDE1LjgzLDAsMCwwLTIuMDUsNS42MWwwLC4wOGMwLC4yMy0uMDguNDYtLjExLjdhOS4yMyw5LjIzLDAsMCwwLDEsMTguMzloLjEyYTEsMSwwLDAsMCwwLTJoLS4xMkE3LjIzLDcuMjMsMCwwLDEsMTIuMDgsMzBsLjE1LDAsLjE4LDAsLjE4LS4xMS4xMy0uMDhjLjA2LS4wNi4xLS4xMy4xNS0uMTlsLjA3LS4xMUEuNjkuNjksMCwwLDAsMTMsMjkuMmEuMzIuMzIsMCwwLDAsMC0uMDksMTQuNDEsMTQuNDEsMCwwLDEsMjguNzgsMSwxNC43NywxNC43NywwLDAsMS0uNjYsNC4zMiwxLDEsMCwwLDAsLjY2LDEuMjUsMSwxLDAsMCwwLC4yOSwwLDEsMSwwLDAsMCwxLS43LDE2LjczLDE2LjczLDAsMCwwLC43NS00LjkxLDE3LjQxLDE3LjQxLDAsMCwwLS4xOS0yLjQxLDguODMsOC44MywwLDAsMSwzLC44Miw4LDgsMCwwLDEsMy42NywxMC42MywxLDEsMCwwLDAsLjQ4LDEuMzMuOTQuOTQsMCwwLDAsLjQzLjEsMSwxLDAsMCwwLC45LS41NywxMCwxMCwwLDAsMC00LjYzLTEzLjMsMTAuNTUsMTAuNTUsMCwwLDAtNC4zLTFBMTYuNDIsMTYuNDIsMCwwLDAsMzMsMTQuNzJhNi43LDYuNywwLDAsMSw0LjgyLTIsNyw3LDAsMCwxLDYuODMsNS45MSwxLDEsMCwwLDAsMS4yMy44MSw0Ljg4LDQuODgsMCwwLDEsMS4xOC0uMDksMTAsMTAsMCwwLDEsMTAsMTBBMTAuNjgsMTAuNjgsMCwwLDEsNTYsMzRhMSwxLDAsMCwwLC40NCwxLjNBNC45Myw0LjkzLDAsMCwxLDU0LjIsNDQuNUg1MS44M2ExLDEsMCwwLDAsMCwyaDIuNDFBNi45NCw2Ljk0LDAsMCwwLDU4LjE4LDM0WlwiLz48cGF0aCBkPVwiTTI5LjkzLDQ0LjVIMjUuNTlsMy0zYTEsMSwwLDAsMCwwLTEuNDIsMSwxLDAsMCwwLTEuNDEsMGwtMywzVjM4Ljc1YTEsMSwwLDAsMC0yLDB2NC4zM2wtMy0zYTEsMSwwLDAsMC0xLjQxLDAsMSwxLDAsMCwwLDAsMS40MmwzLDNIMTYuNDNhMSwxLDAsMCwwLDAsMmg0LjM0bC0zLDNhMSwxLDAsMCwwLC43LDEuNywxLDEsMCwwLDAsLjcxLS4yOWwzLTN2NC4zNGExLDEsMCwwLDAsMiwwVjQ3LjkxbDMsM2ExLDEsMCwwLDAsMS40MSwwLDEsMSwwLDAsMCwwLTEuNDFsLTMtM2g0LjM0YTEsMSwwLDEsMCwwLTJaXCIvPjxwYXRoIGQ9XCJNNDcuNTcsNDQuNUg0My4yM2wzLTNhMSwxLDAsMCwwLDAtMS40MiwxLDEsMCwwLDAtMS40MSwwbC0zLDNWMzguNzVhMSwxLDAsMCwwLTIsMHY0LjMzbC0zLTNhMSwxLDAsMCwwLTEuNDEsMCwxLDEsMCwwLDAsMCwxLjQybDMsM0gzNC4wN2ExLDEsMCwxLDAsMCwyaDQuMzRsLTMsM2ExLDEsMCwwLDAsLjcsMS43LDEsMSwwLDAsMCwuNzEtLjI5bDMtM3Y0LjM0YTEsMSwwLDAsMCwyLDBWNDcuOTFsMywzYTEsMSwwLDAsMCwxLjQxLDAsMSwxLDAsMCwwLDAtMS40MWwtMy0zaDQuMzRhMSwxLDAsMCwwLDAtMlpcIi8+PC9zdmc+YDtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbCB0aGUgQVBJIHRvIGV4dHJhY3QgdGhlIGRhdGEgaW4ganNvblxuICBhc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgZXJyb3Iub3JpZ2luYWxFcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG5ld0Vycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBgRXJyb3IgZmV0Y2hpbmcgb3IgcGFyc2luZyBKU09OOiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgICk7XG4gICAgICBpZiAoZXJyb3Iub3JpZ2luYWxFcnJvcikge1xuICAgICAgICBuZXdFcnJvci5vcmlnaW5hbEVycm9yID0gZXJyb3Iub3JpZ2luYWxFcnJvcjtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ld0Vycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiBwcm9jZXNzaW5nIGpzb24gYW5kIHBhcnNpbmcgZGF0YVxuICBmdW5jdGlvbiBwYXJzZUxvY2F0aW9uRGF0YSh1cmwpIHtcbiAgICBsb2FkSnNvbih1cmwpXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcblxuICAgICAgICBjb25zdCB0b2RheVdlYXRoZXIgPSB7XG4gICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgY2l0eToganNvbi5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgY291bnRyeToganNvbi5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICAgICAgY29uZGl0aW9uVGV4dDoganNvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29uZGl0aW9uSWNvbjogZ2V0SWNvbihcbiAgICAgICAgICAgICAganNvbi5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxuICAgICAgICAgICAgICBqc29uLmN1cnJlbnQuaXNfZGF5LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbkNvZGU6IGpzb24uY3VycmVudC5jb25kaXRpb24uY29kZSxcbiAgICAgICAgICAgIGZlZWxzTGlrZUM6IGpzb24uY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgIGZlZWxzTGlrZUY6IGpzb24uY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIHRlbXBDOiBqc29uLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgdGVtcEY6IGpzb24uY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICBsb2NhbFRpbWU6IGpzb24ubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgaHVtaWRpdHk6IGpzb24uY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGpzb24uY3VycmVudC52aXNfa20sXG4gICAgICAgICAgICBjbG91ZGluZXNzOiBqc29uLmN1cnJlbnQuY2xvdWQsXG4gICAgICAgICAgICBzdW5yaXNlOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2UsXG4gICAgICAgICAgICBzdW5zZXQ6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LFxuICAgICAgICAgICAgbW9vbklsbHVtaW5hdGlvbjpcbiAgICAgICAgICAgICAganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX2lsbHVtaW5hdGlvbixcbiAgICAgICAgICAgIGlzRGF5OiBqc29uLmN1cnJlbnQuaXNfZGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9yZWNhc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF5OiBcInRvbW9ycm93XCIsXG4gICAgICAgICAgICAgIGRhdGU6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uSWNvbjogZ2V0SWNvbihcbiAgICAgICAgICAgICAgICBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uY29kZSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBjb25kaXRpb25UZXh0OiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgY29uZGl0aW9uQ29kZToganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmNvZGUsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfYzoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jLFxuICAgICAgICAgICAgICBhdmd0ZW1wX2Y6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRheTogXCJkYXkgYWZ0ZXIgdG9tb3Jyb3dcIixcbiAgICAgICAgICAgICAgZGF0ZToganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlLFxuICAgICAgICAgICAgICBjb25kaXRpb25JY29uOiBnZXRJY29uKFxuICAgICAgICAgICAgICAgIGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5jb2RlLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGNvbmRpdGlvblRleHQ6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICBjb25kaXRpb25Db2RlOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uY29kZSxcbiAgICAgICAgICAgICAgYXZndGVtcF9jOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfZjoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9mLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF5OiBcImZvdXJ0aCBkYXlcIixcbiAgICAgICAgICAgICAgZGF0ZToganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLFxuICAgICAgICAgICAgICBjb25kaXRpb25JY29uOiBnZXRJY29uKFxuICAgICAgICAgICAgICAgIGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5LmNvbmRpdGlvbi5jb2RlLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGNvbmRpdGlvblRleHQ6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICBjb25kaXRpb25Db2RlOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24uY29kZSxcbiAgICAgICAgICAgICAgYXZndGVtcF9jOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfZjoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9mLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5V2VhdGhlcik7XG5cbiAgICAgICAgY3JlYXRlRG9tLmRlbGV0ZUR5bmFtaWNEb21FbGVtZW50cygpO1xuICAgICAgICBjcmVhdGVEb20uY3JlYXRlRHluYW1pY0RvbUVsZW1lbnRzKFxuICAgICAgICAgIGNyZWF0ZURvbS5kZWZpbmVEeW5hbWljRG9tVHJlZSh0b2RheVdlYXRoZXIpLFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyb3Iub3JpZ2luYWxFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3JpZ2luYWwgZXJyb3Igb2JqZWN0OiBcIiwgZXJyb3Iub3JpZ2luYWxFcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gU2hvdyBkYXRhIGJhc2VkIG9uIHVzZXIgbG9jYXRpb24gZHVyaW5nIHBhZ2UgbG9hZFxuICBmdW5jdGlvbiBzaG93RGVmYXVsdExvY2F0aW9uRGF0YSgpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IFwiTG9uZG9uXCI7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTAyN2ViMTgxYmM5MTQ3NjNhMGUxNDAxMjUyMzI5MTEmcT0ke2NpdHlOYW1lfSZkYXlzPTRgO1xuICAgIHBhcnNlTG9jYXRpb25EYXRhKHVybCk7XG4gIH1cblxuICAvLyBTaG93IGRhdGEgYmFzZWQgb24gdXNlciBzZWFyY2hcbiAgZnVuY3Rpb24gc2hvd1NlYXJjaGVkTG9jYXRpb25EYXRhKCkge1xuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtXCIpO1xuICAgIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wMjdlYjE4MWJjOTE0NzYzYTBlMTQwMTI1MjMyOTExJnE9JHtjaXR5TmFtZS52YWx1ZX0mZGF5cz00YDtcbiAgICAgIHBhcnNlTG9jYXRpb25EYXRhKHVybCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTaG93IGRhdGEgYmFzZWQgb24gZGV0ZXJtaWVuZCB1c2VyJ3MgbG9jYXRpb25cbiAgYXN5bmMgZnVuY3Rpb24gc2hvd1VzZXJMb2NhdGlvbkRhdGEoKSB7XG4gICAgbGV0IGlwQWRkcmVzcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXBSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29uXCIpO1xuICAgICAgY29uc3QgaXBEYXRhID0gYXdhaXQgaXBSZXNwb25zZS5qc29uKCk7XG4gICAgICBpcEFkZHJlc3MgPSBpcERhdGEuaXA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNob3dEZWZhdWx0TG9jYXRpb25EYXRhKCk7XG4gICAgfVxuXG4gICAgaWYgKGlwQWRkcmVzcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL2lwYXBpLmNvLyR7aXBBZGRyZXNzfS9qc29uL2AsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGxvY2F0aW9uRGF0YTtcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTAyN2ViMTgxYmM5MTQ3NjNhMGUxNDAxMjUyMzI5MTEmcT0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0mZGF5cz00YDtcbiAgICAgICAgcGFyc2VMb2NhdGlvbkRhdGEodXJsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2hvd0RlZmF1bHRMb2NhdGlvbkRhdGEoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hvd0RlZmF1bHRMb2NhdGlvbkRhdGEoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd1NlYXJjaGVkTG9jYXRpb25EYXRhLFxuICAgIHNob3dVc2VyTG9jYXRpb25EYXRhLFxuICAgIHNob3dEZWZhdWx0TG9jYXRpb25EYXRhLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckRhdGFNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgY3JlYXRlRG9tIGZyb20gXCIuL2RvbUhhbmRsZXJcIjtcbmltcG9ydCBXZWF0aGVyRGF0YU1vZHVsZSBmcm9tIFwiLi93ZWF0aGVyRGF0YU1vZHVsZVwiO1xuXG5jcmVhdGVEb20uY3JlYXRlU3RhdGljRG9tRWxlbWVudHMoXG4gIGNyZWF0ZURvbS5kZWZpbmVTdGF0aWNEb21UcmVlKCksXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLFxuKTtcblxuV2VhdGhlckRhdGFNb2R1bGUuc2hvd0RlZmF1bHRMb2NhdGlvbkRhdGEoKTtcbi8vIFdlYXRoZXJEYXRhTW9kdWxlLnNob3dVc2VyTG9jYXRpb25EYXRhKCk7XG5XZWF0aGVyRGF0YU1vZHVsZS5zaG93U2VhcmNoZWRMb2NhdGlvbkRhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==