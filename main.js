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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  background-color: skyblue;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B","sourcesContent":["html {\n  background-color: skyblue;\n}\n"],"sourceRoot":""}]);
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
                        elementTextContent: "Search",
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
                            attributeValue: "text",
                          },
                          {
                            attributeName: "id",
                            attributeValue: "search",
                          },
                          {
                            attributeName: "placeholder",
                            attributeValue: "search location",
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
                elementClass: "city",
                elementTextContent: data.current.city,
              },
              {
                elementType: "div",
                elementClass: "country",
                elementTextContent: data.current.country,
              },
              {
                elementType: "div",
                elementClass: "date",
                elementTextContent: date,
              },
              {
                elementType: "div",
                elementClass: "time",
                elementTextContent: time,
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
                    elementClass: "condition",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "condition-icon-container",
                        childElements: [
                          {
                            elementType: "img",
                            elementClass: "condition-icon",
                            elementAttributes: [
                              {
                                attributeName: "src",
                                attributeValue: data.current.conditionIcon,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        elementType: "div",
                        elementClass: "condition-text",
                        elementTextContent: data.current.conditionText,
                      },
                    ],
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
                        elementTextContent: `${data.current.humidity}`,
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
                        elementTextContent: `${data.current.visibility}`,
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
                        elementTextContent: `${data.current.cloudiness}`,
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
                        childElements: [
                          {
                            elementType: "img",
                            elementClass: "forecast-condition-icon",
                            elementAttributes: [
                              {
                                attributeName: "src",
                                attributeValue: data.forecast[0].conditionIcon,
                              },
                            ],
                          },
                        ],
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
                        childElements: [
                          {
                            elementType: "img",
                            elementClass: "forecast-condition-icon",
                            elementAttributes: [
                              {
                                attributeName: "src",
                                attributeValue: data.forecast[1].conditionIcon,
                              },
                            ],
                          },
                        ],
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
                        childElements: [
                          {
                            elementType: "img",
                            elementClass: "forecast-condition-icon",
                            elementAttributes: [
                              {
                                attributeName: "src",
                                attributeValue: data.forecast[2].conditionIcon,
                              },
                            ],
                          },
                        ],
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
            conditionIcon: json.current.condition.icon,
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
          },
          forecast: [
            {
              day: "tomorrow",
              date: json.forecast.forecastday[1].date,
              conditionIcon: json.forecast.forecastday[1].day.condition.icon,
              conditionText: json.forecast.forecastday[1].day.condition.text,
              avgtemp_c: json.forecast.forecastday[1].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[1].day.avgtemp_f,
            },
            {
              day: "day after tomorrow",
              date: json.forecast.forecastday[2].date,
              conditionIcon: json.forecast.forecastday[2].day.condition.icon,
              conditionText: json.forecast.forecastday[2].day.condition.text,
              avgtemp_c: json.forecast.forecastday[2].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[2].day.avgtemp_f,
            },
            {
              day: "fourth day",
              date: json.forecast.forecastday[3].date,
              conditionIcon: json.forecast.forecastday[3].day.condition.icon,
              conditionText: json.forecast.forecastday[3].day.condition.text,
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

// WeatherDataModule.showDefaultLocationData();
_weatherDataModule__WEBPACK_IMPORTED_MODULE_2__["default"].showUserLocationData();
_weatherDataModule__WEBPACK_IMPORTED_MODULE_2__["default"].showSearchedLocationData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3NCO0FBQ2U7QUFDZTs7QUFFcEQsbURBQVM7QUFDVCxFQUFFLG1EQUFTO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLDBEQUFpQjtBQUNqQiwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdmFjbGltYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvLi9zcmMvd2VhdGhlckRhdGFNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmFjbGltYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3ZhY2xpbWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vdmFjbGltYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmFjbGltYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vdmFjbGltYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm92YWNsaW1hLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVEb20gPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBkZWZpbmVTdGF0aWNEb21UcmVlKCkge1xuICAgIGNvbnN0IERPTVRyZWUgPSBbXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBlbGVtZW50Q2xhc3M6IFwid3JhcHBlclwiLFxuICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidG9wLW5hdlwiLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcm0td3JhcHBlclwiLFxuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwic2VhcmNoLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogXCJzZWFyY2ggbG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb290ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIERPTVRyZWU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVEeW5hbWljRG9tVHJlZShkYXRhKSB7XG4gICAgY29uc3QgW2RhdGUsIHRpbWVdID0gZGF0YS5jdXJyZW50LmxvY2FsVGltZS5zcGxpdChcIiBcIik7XG5cbiAgICBjb25zdCBET01UcmVlID0gW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgZWxlbWVudENsYXNzOiBcIm1haW4tY29udGFpbmVyXCIsXG4gICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJsb2NhdGlvblwiLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuY3VycmVudC5jaXR5LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNvdW50cnlcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuY3VycmVudC5jb3VudHJ5LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidGltZVwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogdGltZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0b2RheVwiLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImN1cnJlbnRcIixcbiAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJjb25kaXRpb24taWNvbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJjb25kaXRpb24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwic3JjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJjb25kaXRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGEuY3VycmVudC50ZW1wQ33CsENgLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmZWVscy1saWtlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYEZlZWxzIGxpa2UgJHtkYXRhLmN1cnJlbnQuZmVlbHNMaWtlQ33CsENgLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJodW1pZGl0eS1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImh1bWlkaXR5LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGBIdW1pZGl0eWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJodW1pZGl0eS12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9YCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ2aXNpYmlsaXR5LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidmlzaWJpbGl0eS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgVmlzaWJpbGl0eWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ2aXNpYmlsaXR5LXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGEuY3VycmVudC52aXNpYmlsaXR5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiY2xvdWRpbmVzcy1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImNsb3VkaW5lc3MtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYENsb3VkaW5lc3NgLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiY2xvdWRpbmVzcy12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmN1cnJlbnQuY2xvdWRpbmVzc31gLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnJpc2UtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzdW5yaXNlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGBTdW5yaXNlYCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcInN1bnJpc2UtdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50LnN1bnJpc2V9YCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzdW5zZXQtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzdW5zZXQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYFN1bnNldGAsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzdW5zZXQtdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogYCR7ZGF0YS5jdXJyZW50LnN1bnNldH1gLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiaG91cmx5LWZvcmVjYXN0XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZGFpbHktZm9yZWNhc3RcIixcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXktb25lXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBkYXRhLmZvcmVjYXN0WzBdLmRhdGUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9yZWNhc3QtY29uZGl0aW9uLWljb24tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZm9yZWNhc3QtY29uZGl0aW9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInNyY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogZGF0YS5mb3JlY2FzdFswXS5jb25kaXRpb25JY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGRhdGEuZm9yZWNhc3RbMF0uY29uZGl0aW9uVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGV4dENvbnRlbnQ6IGAke2RhdGEuZm9yZWNhc3RbMF0uYXZndGVtcF9jfcKwQ2AsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwiZGF5LXR3b1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogZGF0YS5mb3JlY2FzdFsxXS5kYXRlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW1nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzcmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IGRhdGEuZm9yZWNhc3RbMV0uY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBkYXRhLmZvcmVjYXN0WzFdLmNvbmRpdGlvblRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmZvcmVjYXN0WzFdLmF2Z3RlbXBfY33CsENgLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImRheS10aHJlZVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZXh0Q29udGVudDogZGF0YS5mb3JlY2FzdFsyXS5kYXRlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi1pY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW1nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzOiBcImZvcmVjYXN0LWNvbmRpdGlvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzcmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IGRhdGEuZm9yZWNhc3RbMl0uY29uZGl0aW9uSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJmb3JlY2FzdC1jb25kaXRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBkYXRhLmZvcmVjYXN0WzJdLmNvbmRpdGlvblRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRleHRDb250ZW50OiBgJHtkYXRhLmZvcmVjYXN0WzJdLmF2Z3RlbXBfY33CsENgLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIERPTVRyZWU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50c0hlbHBlcih0cmVlLCBwYXJlbnRFbGVtZW50KSB7XG4gICAgdHJlZS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai5lbGVtZW50VHlwZSk7XG4gICAgICBpZiAob2JqLmVsZW1lbnRDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQob2JqLmVsZW1lbnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAob2JqLmVsZW1lbnRBdHRyaWJ1dGVzKSB7XG4gICAgICAgIG9iai5lbGVtZW50QXR0cmlidXRlcy5mb3JFYWNoKChhdHQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQuYXR0cmlidXRlTmFtZSwgYXR0LmF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob2JqLmVsZW1lbnRUZXh0Q29udGVudCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmVsZW1lbnRUZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICBpZiAob2JqLmNoaWxkRWxlbWVudHMpIHtcbiAgICAgICAgY3JlYXRlRG9tRWxlbWVudHNIZWxwZXIob2JqLmNoaWxkRWxlbWVudHMsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQ3JlYXRlIERPTSBlbGVtZW50cyBiYXNlZCBvbiB0aGUgRE9NVHJlZVxuICBmdW5jdGlvbiBjcmVhdGVTdGF0aWNEb21FbGVtZW50cyh0cmVlLCBwYXJlbnRFbGVtZW50KSB7XG4gICAgY3JlYXRlRG9tRWxlbWVudHNIZWxwZXIodHJlZSwgcGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEeW5hbWljRG9tRWxlbWVudHModHJlZSwgcGFyZW50RWxlbWVudCkge1xuICAgIGNyZWF0ZURvbUVsZW1lbnRzSGVscGVyKHRyZWUsIHBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlRHluYW1pY0RvbUVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gICAgaWYgKGV4aXN0aW5nV3JhcHBlcikge1xuICAgICAgZXhpc3RpbmdXcmFwcGVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGVmaW5lU3RhdGljRG9tVHJlZSxcbiAgICBkZWZpbmVEeW5hbWljRG9tVHJlZSxcbiAgICBjcmVhdGVTdGF0aWNEb21FbGVtZW50cyxcbiAgICBjcmVhdGVEeW5hbWljRG9tRWxlbWVudHMsXG4gICAgZGVsZXRlRHluYW1pY0RvbUVsZW1lbnRzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9tO1xuIiwiaW1wb3J0IGNyZWF0ZURvbSBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XG5cbi8vIFRoZSBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIGV4dHJhY3RpbmcgYW5kIGRpc3BsYXlpbmcgbG9jYXRpb24gZGF0YVxuY29uc3QgV2VhdGhlckRhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAvLyBDYWxsIHRoZSBBUEkgdG8gZXh0cmFjdCB0aGUgZGF0YSBpbiBqc29uXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRKc29uKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICBlcnJvci5vcmlnaW5hbEVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbmV3RXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBFcnJvciBmZXRjaGluZyBvciBwYXJzaW5nIEpTT046ICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgKTtcbiAgICAgIGlmIChlcnJvci5vcmlnaW5hbEVycm9yKSB7XG4gICAgICAgIG5ld0Vycm9yLm9yaWdpbmFsRXJyb3IgPSBlcnJvci5vcmlnaW5hbEVycm9yO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3RXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHByb2Nlc3NpbmcganNvbiBhbmQgcGFyc2luZyBkYXRhXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYXRpb25EYXRhKHVybCkge1xuICAgIGxvYWRKc29uKHVybClcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5V2VhdGhlciA9IHtcbiAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBjaXR5OiBqc29uLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICBjb3VudHJ5OiBqc29uLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgICBjb25kaXRpb25UZXh0OiBqc29uLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBjb25kaXRpb25JY29uOiBqc29uLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICBmZWVsc0xpa2VDOiBqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgICBmZWVsc0xpa2VGOiBqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICB0ZW1wQzoganNvbi5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgIHRlbXBGOiBqc29uLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICAgICAgbG9jYWxUaW1lOiBqc29uLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBqc29uLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBqc29uLmN1cnJlbnQudmlzX2ttLFxuICAgICAgICAgICAgY2xvdWRpbmVzczoganNvbi5jdXJyZW50LmNsb3VkLFxuICAgICAgICAgICAgc3VucmlzZToganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlLFxuICAgICAgICAgICAgc3Vuc2V0OiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcmVjYXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRheTogXCJ0b21vcnJvd1wiLFxuICAgICAgICAgICAgICBkYXRlOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkljb246IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgICBjb25kaXRpb25UZXh0OiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgYXZndGVtcF9jOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfZjoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9mLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF5OiBcImRheSBhZnRlciB0b21vcnJvd1wiLFxuICAgICAgICAgICAgICBkYXRlOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkljb246IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgICBjb25kaXRpb25UZXh0OiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgYXZndGVtcF9jOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfZjoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9mLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF5OiBcImZvdXJ0aCBkYXlcIixcbiAgICAgICAgICAgICAgZGF0ZToganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLFxuICAgICAgICAgICAgICBjb25kaXRpb25JY29uOiBqc29uLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgICAgY29uZGl0aW9uVGV4dDoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgIGF2Z3RlbXBfYzoganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jLFxuICAgICAgICAgICAgICBhdmd0ZW1wX2Y6IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5LmF2Z3RlbXBfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheVdlYXRoZXIpO1xuXG4gICAgICAgIGNyZWF0ZURvbS5kZWxldGVEeW5hbWljRG9tRWxlbWVudHMoKTtcbiAgICAgICAgY3JlYXRlRG9tLmNyZWF0ZUR5bmFtaWNEb21FbGVtZW50cyhcbiAgICAgICAgICBjcmVhdGVEb20uZGVmaW5lRHluYW1pY0RvbVRyZWUodG9kYXlXZWF0aGVyKSxcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgaWYgKGVycm9yLm9yaWdpbmFsRXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWdpbmFsIGVycm9yIG9iamVjdDogXCIsIGVycm9yLm9yaWdpbmFsRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIFNob3cgZGF0YSBiYXNlZCBvbiB1c2VyIGxvY2F0aW9uIGR1cmluZyBwYWdlIGxvYWRcbiAgZnVuY3Rpb24gc2hvd0RlZmF1bHRMb2NhdGlvbkRhdGEoKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBcIkxvbmRvblwiO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wMjdlYjE4MWJjOTE0NzYzYTBlMTQwMTI1MjMyOTExJnE9JHtjaXR5TmFtZX0mZGF5cz00YDtcbiAgICBwYXJzZUxvY2F0aW9uRGF0YSh1cmwpO1xuICB9XG5cbiAgLy8gU2hvdyBkYXRhIGJhc2VkIG9uIHVzZXIgc2VhcmNoXG4gIGZ1bmN0aW9uIHNob3dTZWFyY2hlZExvY2F0aW9uRGF0YSgpIHtcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZm9ybVwiKTtcbiAgICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDI3ZWIxODFiYzkxNDc2M2EwZTE0MDEyNTIzMjkxMSZxPSR7Y2l0eU5hbWUudmFsdWV9JmRheXM9NGA7XG4gICAgICBwYXJzZUxvY2F0aW9uRGF0YSh1cmwpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU2hvdyBkYXRhIGJhc2VkIG9uIGRldGVybWllbmQgdXNlcidzIGxvY2F0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHNob3dVc2VyTG9jYXRpb25EYXRhKCkge1xuICAgIGxldCBpcEFkZHJlc3M7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvblwiKTtcbiAgICAgIGNvbnN0IGlwRGF0YSA9IGF3YWl0IGlwUmVzcG9uc2UuanNvbigpO1xuICAgICAgaXBBZGRyZXNzID0gaXBEYXRhLmlwO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzaG93RGVmYXVsdExvY2F0aW9uRGF0YSgpO1xuICAgIH1cblxuICAgIGlmIChpcEFkZHJlc3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly9pcGFwaS5jby8ke2lwQWRkcmVzc30vanNvbi9gLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbkRhdGE7XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wMjdlYjE4MWJjOTE0NzYzYTBlMTQwMTI1MjMyOTExJnE9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9JmRheXM9NGA7XG4gICAgICAgIHBhcnNlTG9jYXRpb25EYXRhKHVybCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNob3dEZWZhdWx0TG9jYXRpb25EYXRhKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNob3dEZWZhdWx0TG9jYXRpb25EYXRhKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3dTZWFyY2hlZExvY2F0aW9uRGF0YSxcbiAgICBzaG93VXNlckxvY2F0aW9uRGF0YSxcbiAgICBzaG93RGVmYXVsdExvY2F0aW9uRGF0YSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJEYXRhTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZURvbSBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XG5pbXBvcnQgV2VhdGhlckRhdGFNb2R1bGUgZnJvbSBcIi4vd2VhdGhlckRhdGFNb2R1bGVcIjtcblxuY3JlYXRlRG9tLmNyZWF0ZVN0YXRpY0RvbUVsZW1lbnRzKFxuICBjcmVhdGVEb20uZGVmaW5lU3RhdGljRG9tVHJlZSgpLFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSxcbik7XG5cbi8vIFdlYXRoZXJEYXRhTW9kdWxlLnNob3dEZWZhdWx0TG9jYXRpb25EYXRhKCk7XG5XZWF0aGVyRGF0YU1vZHVsZS5zaG93VXNlckxvY2F0aW9uRGF0YSgpO1xuV2VhdGhlckRhdGFNb2R1bGUuc2hvd1NlYXJjaGVkTG9jYXRpb25EYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=